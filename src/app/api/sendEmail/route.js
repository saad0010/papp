import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, mobile, organization, quantity, message } =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: "google",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_TO_EMAIL,
      subject: "Print O Thread Contact Form",
      html: `
      <h3>Details</h3>
      <h3> Name: ${name}</h3>
      <h3> Email: ${email}</h3>
      <h3> Mobile: ${mobile}</h3>
      <h3>Organiation: ${organization}</h3>
      <h3> Quantity: ${quantity}</h3>
      <h3> Message: ${message}</h3>
      `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Form Submitted Successfully " },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed ! Form Submission  " },
      { status: 500 }
    );
  }
}
