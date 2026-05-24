import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { name, email, message, subject } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    const emailSubject = subject || `New inquiry from ${name}`;

    // Send email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'info@anasatech.com',
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.MAIL_USER}>`,
      replyTo: email,
      to: process.env.MAIL_USER,
      subject: `[Anasatech Contact] ${emailSubject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f3f3f3; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" style="width: 100%; max-width: 560px; border-collapse: collapse;">
                  
                  <!-- Logo -->
                  <tr>
                    <td style="padding: 40px 0 32px 0; text-align: center;">
                      <span style="font-size: 20px; font-weight: 600; letter-spacing: -0.5px;">
                        <span style="color: #2563eb;">ANASA</span><span style="color: #000000;">TECH</span>
                      </span>
                    </td>
                  </tr>

                  <!-- Main Card -->
                  <tr>
                    <td>
                      <table role="presentation" style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 16px; overflow: hidden;">
                        
                        <tr>
                          <td style="padding: 36px 32px;">
                            
                            <!-- Header -->
                            <p style="margin: 0 0 4px 0; color: #000000; font-size: 20px; font-weight: 600;">
                              New message
                            </p>
                            <p style="margin: 0 0 28px 0; color: #737373; font-size: 14px;">
                              From the contact form on anasatech.com
                            </p>

                            <!-- Subject -->
                            <div style="margin-bottom: 24px;">
                              <p style="margin: 0 0 4px 0; color: #a3a3a3; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                Subject
                              </p>
                              <p style="margin: 0; color: #171717; font-size: 15px; font-weight: 500;">
                                ${emailSubject}
                              </p>
                            </div>

                            <!-- Divider -->
                            <div style="height: 1px; background: #f3f3f3; margin: 0 0 24px 0;"></div>

                            <!-- From -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                              <tr>
                                <td style="width: 50%; vertical-align: top;">
                                  <p style="margin: 0 0 4px 0; color: #a3a3a3; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                    From
                                  </p>
                                  <p style="margin: 0; color: #171717; font-size: 15px;">
                                    ${name}
                                  </p>
                                </td>
                                <td style="width: 50%; vertical-align: top;">
                                  <p style="margin: 0 0 4px 0; color: #a3a3a3; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                    Email
                                  </p>
                                  <p style="margin: 0;">
                                    <a href="mailto:${email}" style="color: #2563eb; font-size: 15px; text-decoration: none;">
                                      ${email}
                                    </a>
                                  </p>
                                </td>
                              </tr>
                            </table>

                            <!-- Divider -->
                            <div style="height: 1px; background: #f3f3f3; margin: 0 0 24px 0;"></div>

                            <!-- Message -->
                            <div>
                              <p style="margin: 0 0 8px 0; color: #a3a3a3; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                Message
                              </p>
                              <div style="color: #404040; font-size: 14px; line-height: 1.7; white-space: pre-wrap; word-wrap: break-word;">
                                ${message}
                              </div>
                            </div>

                            <!-- Reply Button -->
                            <div style="margin-top: 32px;">
                              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(emailSubject)}" style="display: inline-block; background: #000000; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-weight: 500; font-size: 14px;">
                                Reply to ${name.split(' ')[0]}
                              </a>
                            </div>

                          </td>
                        </tr>

                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 0; text-align: center;">
                      <p style="margin: 0; color: #a3a3a3; font-size: 12px;">
                        Anasatech Ltd &middot; Accra, Ghana
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
