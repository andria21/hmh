import { NextRequest, NextResponse } from "next/server";
import connect from "@/utils/db";
import CvSubmission from "@/models/CvSubmission";

export const dynamic = "force-dynamic";

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return new NextResponse("No file provided", { status: 400 });
  }

  // Validate file size (5MB limit)
  if (file.size > 5 * 1024 * 1024) {
    return new NextResponse("File size exceeds 5MB limit", { status: 400 });
  }

  // Validate file type
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!allowedTypes.includes(file.type)) {
    return new NextResponse(
      "Invalid file type. Only PDF, DOC, and DOCX are allowed",
      { status: 400 }
    );
  }

  // Convert file to buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const newCvSubmission = new CvSubmission({
    fileName: file.name,
    fileData: buffer,
    fileSize: file.size,
    mimeType: file.type,
  });

  try {
    await connect();
    await newCvSubmission.save();

    return new NextResponse("CV has been uploaded", { status: 201 });
  } catch (err) {
    console.error("Database Error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  try {
    await connect();

    // Don't include fileData in the list (too large)
    const cvSubmissions = await CvSubmission.find().select("-fileData");

    return new NextResponse(JSON.stringify(cvSubmissions), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
