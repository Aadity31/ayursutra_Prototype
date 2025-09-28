import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const filePath = path.join(process.cwd(), "hospital-login.json");

    // Read existing logins
    let logins: any[] = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      logins = JSON.parse(data || "[]");
    }

    // Add new login attempt
    logins.push({
      ...body,
      timestamp: new Date().toISOString(),
    });

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(logins, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error logging attempt:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
