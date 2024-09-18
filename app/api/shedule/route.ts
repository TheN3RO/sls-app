import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const schools = null;
  
    try {
        return NextResponse.json(schools, { status: 200 });
    } catch (error) {
      console.error('Error handling GET request:', error);
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }   
}