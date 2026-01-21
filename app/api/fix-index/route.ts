// app/api/fix-index/route.ts
import { NextResponse } from "next/server";
import connect from "@/utils/db";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connect();
    const collection = mongoose.connection.collection('cvsubmissions');
    await collection.dropIndex('filePath_1');
    return NextResponse.json({ message: "Index dropped successfully" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}