import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = appointmentSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { honeypot, ...data } = parsed.data;
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    console.log("Appointment request:", data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
