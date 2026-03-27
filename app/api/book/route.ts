import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  console.log("BOOKING API HIT");

  try {
    const data = await req.json();

    console.log("DATA:", data);
    console.log("SMTP USER:", process.env.SMTP_USER);
    console.log("SMTP PASS EXISTS:", !!process.env.SMTP_PASS);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "YOUR_EMAIL@gmail.com", // test first
      subject: "TEST EMAIL",
      text: "SMTP TEST",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
