import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
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

    // Send email with beautiful template
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `[Anasatech Contact] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 0; padding: 40px 20px;">
            <tr>
              <td align="center">
                <!-- Main Container -->
                <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 59, 115, 0.15);">
                  
                  <!-- Header with Gradient -->
                  <tr>
                    <td style="padding: 0;">
                      <div style="background: linear-gradient(135deg, #003b73 0%, #0074b7 50%, #60a3d9 100%); padding: 40px 30px; text-align: center; position: relative;">
                        <!-- Decorative circles -->
                        <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: rgba(191, 215, 237, 0.2); border-radius: 50%; filter: blur(40px);"></div>
                        <div style="position: absolute; bottom: -20px; left: -20px; width: 120px; height: 120px; background: rgba(96, 163, 217, 0.2); border-radius: 50%; filter: blur(40px);"></div>
                        
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; position: relative; z-index: 1;">
                          💬 New Contact Message
                        </h1>
                        <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px; position: relative; z-index: 1;">
                          Someone reached out through your website
                        </p>
                      </div>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      
                      <!-- Subject Badge -->
                      <div style="background: linear-gradient(135deg, #bfd7ed 0%, #60a3d9 100%); padding: 16px 24px; border-radius: 16px; margin-bottom: 30px; text-align: center;">
                        <p style="margin: 0; color: #003b73; font-size: 18px; font-weight: 600;">
                          📋 ${subject}
                        </p>
                      </div>

                      <!-- Contact Details -->
                      <div style="background: #f8fafc; border-radius: 16px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #0074b7;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 8px 0;">
                              <p style="margin: 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                From
                              </p>
                              <p style="margin: 4px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">
                                ${name}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 16px 0 8px 0;">
                              <p style="margin: 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                Email Address
                              </p>
                              <p style="margin: 4px 0 0 0;">
                                <a href="mailto:${email}" style="color: #0074b7; font-size: 16px; font-weight: 600; text-decoration: none;">
                                  ${email}
                                </a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Message Content -->
                      <div style="background: #ffffff; border: 2px solid #e2e8f0; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
                        <p style="margin: 0 0 12px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          Message
                        </p>
                        <div style="color: #334155; font-size: 15px; line-height: 1.7; white-space: pre-wrap; word-wrap: break-word;">
                          ${message}
                        </div>
                      </div>

                      <!-- Action Button -->
                      <div style="text-align: center; margin-top: 32px;">
                        <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background: linear-gradient(135deg, #003b73 0%, #0074b7 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 50px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(0, 116, 183, 0.3);">
                          📧 Reply to ${name.split(' ')[0]}
                        </a>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">
                        <strong style="color: #003b73;">Anasatech</strong> - Building the Future of African Business
                      </p>
                      <p style="margin: 0; color: #94a3b8; font-size: 13px;">
                        A women-led technology company empowering African businesses
                      </p>
                      <div style="margin-top: 16px;">
                        <a href="https://anasatech.com" style="color: #0074b7; text-decoration: none; font-size: 13px; margin: 0 8px;">🌐 Website</a>
                        <span style="color: #cbd5e1;">•</span>
                        <a href="https://luxe.anasatech.com" style="color: #0074b7; text-decoration: none; font-size: 13px; margin: 0 8px;">Luxe POS</a>
                        <span style="color: #cbd5e1;">•</span>
                        <a href="https://gadainfo.anasatech.com" style="color: #0074b7; text-decoration: none; font-size: 13px; margin: 0 8px;">GadaInfo</a>
                      </div>
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
