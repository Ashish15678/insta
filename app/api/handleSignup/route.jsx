import { NextResponse } from "next/server";
function GET() {
  return NextResponse.json({ message: "forbidden access" });
}

export { GET };
