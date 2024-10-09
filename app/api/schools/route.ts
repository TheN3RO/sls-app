import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongoClient';
import { ObjectId } from 'mongodb';
import path from 'path';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { ISchool, ITeam } from '@/types';

// Handle GET requests
export async function GET(req: NextRequest) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection('schools');

  try {
    const schools = await collection.find().toArray();
    return NextResponse.json(schools, { status: 200 });
  } catch (error) {
    console.error('Error handling GET request:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

// Handle POST requests
export async function POST(req: NextRequest) {
  const client = await clientPromise;
  const db = client.db();
  const schoolsCollection = db.collection('schools');
  const teamsCollection = db.collection('teams');

  try {
    const formData = await req.formData();
    const image = formData.get('image') as File;
    const name = formData.get('name') as string;
    const short = formData.get('short') as string;
    const address = formData.get('address') as string;

    // Generate UUID and timestamp
    const uuid = uuidv4();
    const timestamp = Date.now();
    const ext = path.extname(image.name);
    const newFileName = `${uuid}-${timestamp}${ext}`;

    // Save the image to a local directory (or use a storage service)
    const imagePath = path.join(process.cwd(), 'public', 'images', 'schools', newFileName);
    const imageBuffer = Buffer.from(await image.arrayBuffer());
    await fs.writeFile(imagePath, new Uint8Array(imageBuffer));

    const newSchool: ISchool = {
      _id: new ObjectId(),
      name,
      short,
      address,
      image: newFileName,
      createdAt: new Date()
    };

    // Insert the new school document
    const result = await schoolsCollection.insertOne(newSchool);
    const schoolId = result.insertedId;

    // Create the new team document with a reference to the school ID
    const newTeam: ITeam = {
      _id: new ObjectId(),
      _schoolId: new ObjectId(schoolId),
      index: 0,
      shortName: short,
    };

    await teamsCollection.insertOne(newTeam);

    return NextResponse.json({ message: 'School and team added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling POST request:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

// Handle PUT requests
export async function PUT(req: NextRequest) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection('schools');

  try {
    const { id, ...updateData } = await req.json();
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
    return NextResponse.json({ message: 'School updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling PUT request:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

// Handle DELETE requests
export async function DELETE(req: NextRequest) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection('schools');

  try {
    const { id: deleteId } = await req.json();
    
    // Retrieve the school document to get the image name
    const school = await collection.findOne({ _id: new ObjectId(deleteId) });
    if (!school) {
      return NextResponse.json({ message: 'School not found' }, { status: 404 });
    }
    const imagePath = path.join(process.cwd(), 'public', 'images', 'schools', school.image);

    await fs.unlink(imagePath);
    await collection.deleteOne({ _id: new ObjectId(deleteId) });

    return NextResponse.json({ message: 'School deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling DELETE request:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
