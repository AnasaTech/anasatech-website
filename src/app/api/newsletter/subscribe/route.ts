import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter for Zoho Mail
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
    const { email } = await request.json();

    console.log({
        mail: process.env.ZOHO_MAIL_USER,
        pass: process.env.ZOHO_MAIL_PASSWORD
    })

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    // Send confirmation email
    await transporter.sendMail({
      from: 'newsletter@anasatech.com',
      to: email,
      subject: 'Welcome to Anasa Tech Newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for subscribing!</h2>
          <p>You've successfully subscribed to Anasa Tech's newsletter.</p>
          <p>We'll keep you updated with our latest news and updates.</p>
          <br/>
          <p>Best regards,</p>
          <p>The Anasa Tech Team</p>
        </div>
      `
    });

    // Also send notification to admin
    await transporter.sendMail({
      from: 'newsletter@anasatech.com',
      to: 'newsletter@anasaech.com',
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Newsletter Subscription</h2>
          <p>New subscriber: ${email}</p>
          <p>Date: ${new Date().toLocaleString()}</p>
        </div>
      `
    });

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { message: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
