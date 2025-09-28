import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface DoctorLoginEntry {
  email: string;
  password: string;
  rememberMe?: boolean;
  timestamp: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json(); // { email, password, rememberMe }

    const filePath = path.join(process.cwd(), "doctor-logins.json");

    // Read existing logins if file exists
    let logins: DoctorLoginEntry[] = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      logins = JSON.parse(data || "[]") as DoctorLoginEntry[];
    }

    // Add new login attempt
    logins.push({
      email: body.email,
      password: body.password,
      rememberMe: body.rememberMe ?? false,
      timestamp: new Date().toISOString(),
    });

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(logins, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error logging doctor login:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
