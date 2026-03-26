import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

await client.messages.create({
  body: message,
  from: "whatsapp:+14155238886",
  to: "whatsapp:+201XXXXXXXXX",
});

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

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

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: "New Booking Request",
    text: message,
  });

  console.log("EMAIL SENT");

  return NextResponse.json({ success: true });
}
