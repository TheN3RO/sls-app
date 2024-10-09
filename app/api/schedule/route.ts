import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import { join } from 'path';

export async function GET() {
  const filePath = join(process.cwd(), 'constants', 'schedule', 'schedule.json');

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return NextResponse.json(JSON.parse(data), { status: 200 });
  } catch (error) {
    console.error('Error handling GET request:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { shedule } = await req.json();
  const filePath = join(process.cwd(), 'constants', 'schedule', 'schedule.json');

  try {
    console.log(shedule, filePath);
    // await fs.writeFile(filePath, JSON.stringify(shedule, null, 2));
    return NextResponse.json(shedule, { status: 200 });
  } catch (error) {
    console.error('Error handling GET request:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }   
}