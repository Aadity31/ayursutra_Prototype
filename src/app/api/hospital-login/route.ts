import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define expected login structure
interface LoginEntry {
  email: string;
  password: string;
  rememberMe?: boolean;
  timestamp: string;
}

interface HospitalLoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body: HospitalLoginRequest = await req.json();

    const filePath = path.join(process.cwd(), "hospital-login.json");

    // Read existing logins
    let logins: LoginEntry[] = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      logins = JSON.parse(data || "[]") as LoginEntry[];
    }

    // Add new login attempt
    const newEntry: LoginEntry = {
      ...body,
      timestamp: new Date().toISOString(),
    };
    logins.push(newEntry);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(logins, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error logging attempt:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
