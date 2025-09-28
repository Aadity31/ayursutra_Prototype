import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

interface PatientLogin {
  email: string;
  password: string;
  rememberMe?: boolean;
  timestamp: string;
}

interface PatientLoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body: PatientLoginRequest = await req.json();

    const newEntry: PatientLogin = {
      ...body,
      timestamp: new Date().toISOString(),
    };

    // Fetch existing logins from KV
    const existingLogins = (await kv.get("patient-logins")) as PatientLogin[] | null;

    const updatedLogins = existingLogins ? [...existingLogins, newEntry] : [newEntry];

    // Save updated logins back to KV
    await kv.set("patient-logins", updatedLogins);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error logging patient login:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
