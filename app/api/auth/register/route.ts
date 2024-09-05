import { IUser } from "@/types";
import clientPromise from "../../../../lib/mongoClient";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(request: Request) {
  try {
    const userProps = await request.json();

    const bcrypt = require("bcrypt");

    const hashedPassword = await bcrypt.hash(userProps.password, 10);

    const client = await clientPromise;
    const db = client.db();

    const newUser: IUser = {
      _id: new ObjectId(),
      _teamId: userProps._teamId == "" ? undefined : new ObjectId(userProps._teamId),
      email: userProps.email,
      name: userProps.name,
      role: userProps.role,
      school: userProps.school,
      isReRegistered: userProps.isReRegistered,
      password: hashedPassword,
      teamRole: undefined, 
      points: 0, 
      games: 0, 
      wins: 0, 
      loses: 0,
      createdAt: new Date(), 
    };

    const createAccount = await db
      .collection("users")
      .insertOne(newUser);
      
    return NextResponse.json({ success: "Account created" }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}