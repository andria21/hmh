// models/CvSubmission.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICvSubmission extends Document {
  fileName: string;
  fileData: Buffer;
  fileSize: number;
  mimeType: string;
  createdAt: Date;
  updatedAt: Date;
}

const CvSubmissionSchema: Schema<ICvSubmission> = new Schema(
  {
    fileName: {
      type: String,
      required: [true, "File name is required"],
    },
    fileData: {
      type: Buffer,
      required: [true, "File data is required"],
    },
    fileSize: {
      type: Number,
      required: [true, "File size is required"],
    },
    mimeType: {
      type: String,
      required: [true, "MIME type is required"],
      enum: [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ],
    },
  },
  {
    timestamps: true,
  }
);

CvSubmissionSchema.index({ filePath: 1 }, { unique: false });

const CvSubmission: Model<ICvSubmission> =
  mongoose.models.CvSubmission || mongoose.model<ICvSubmission>("CvSubmission", CvSubmissionSchema);

export default CvSubmission;