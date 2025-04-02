import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_MAIL_USER,
    pass: process.env.ZOHO_MAIL_PASSWORD
  }
});

export async function POST(request: Request) {
  try {
    const { name, email, message, subject } = await request.json();

    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email
    await transporter.sendMail({
      from: process.env.ZOHO_MAIL_USER,
      to: 'support@anasatech.com',
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New message received!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
