import clientPromise from "@/lib/mongoClient";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const client = await clientPromise;
	const db = client.db();
	const collection = db.collection('users');

	try {
    const { searchParams } = new URL(req.url);
    const _teamId = searchParams.get('_teamId');

    if (!_teamId) {
      return NextResponse.json({ message: 'Missing _teamId parameter' }, { status: 400 });
    }

    const users = await collection.find({ _teamId: new ObjectId(_teamId) }, { projection: { _id: 1, name: 1, teamRole: 1 } }).toArray();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error handling GET request:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
	const client = await clientPromise;
	const db = client.db();
	const collection = db.collection('users');

	try {
		const { id, teamRole } = await req.json();
		const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { teamRole } });
		if (result.modifiedCount > 0) {
			return NextResponse.json({ message: 'Role updated successfully' }, { status: 200 });
		} else {
			return NextResponse.json({ message: 'Role not found' }, { status: 404 });
		}
	} catch (error) {
		console.error('Error handling PUT request:', error);
		return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
	}
}