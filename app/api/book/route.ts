import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const message = `
New Booking Request

Trip: ${data.excursion}
Date: ${data.date}
Time: ${data.time}
Adults: ${data.adults}
Children: ${data.children}
Hotel: ${data.hotel}

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

Notes: ${data.notes}
`;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Hurghada Bookings" <hurghada@aafiyahdigital.com>`,
      to: "hurghada@aafiyahdigital.com",
      subject: "New Booking Request",
      text: message,
    });

    console.log("EMAIL SENT:", info);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
