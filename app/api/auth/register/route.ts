import clientPromise from "../../../../lib/mongoClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name, role, school, isReRegistered, password } = await request.json();

    const bcrypt = require("bcrypt");

    const hashedPassword = await bcrypt.hash(password, 10);

    const client = await clientPromise;
    const db = client.db();

    const createAccount = await db
      .collection("users")
      .insertOne({ 
        email: email, 
        name: name,
        role: role,
        school: school,
        isReRegistered: isReRegistered,
        password: hashedPassword 
      });

    return NextResponse.json({ success: "Account created" }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}