import clientPromise from "@/lib/mongoClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('users');

    try {
        const users = await collection.find().toArray();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Error handling GET request:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}