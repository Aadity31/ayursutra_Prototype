import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface PatientLogin {
  [key: string]: unknown; // agar aapko dynamic fields allow karni hain
  timestamp: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const filePath = path.join(process.cwd(), "patient-logins.json");

    let logins: PatientLogin[] = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      logins = JSON.parse(data || "[]") as PatientLogin[];
    }

    logins.push({
      ...body,
      timestamp: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(logins, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error logging patient login:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
