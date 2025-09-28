import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type LoginEntry = Record<string, unknown> & { timestamp: string };

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;

    const filePath = path.join(process.cwd(), "patient-logins.json");

    const logins: LoginEntry[] = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      const parsed = (data ? JSON.parse(data) : []) as LoginEntry[];
      logins.push(...parsed);
    }

    const entry: LoginEntry = {
      ...body,
      timestamp: new Date().toISOString(),
    };

    logins.push(entry);

    fs.writeFileSync(filePath, JSON.stringify(logins, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error logging patient login:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
