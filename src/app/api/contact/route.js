// app/api/contact/route.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,        // e.g. "smtp.gmail.com"
  port: parseInt(process.env.SMTP_PORT, 10), // e.g. 465 or 587
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// This runs whenever your form POSTs to /api/contact
export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // you can tweak the “from”/“to” as you like
    await transporter.sendMail({
      from: `"No-Reply" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER, 
      subject: `📨 New contact from ${name}`,
      text: `
        Name:    ${name}
        Email:   ${email}
        Phone:   ${phone}
        Message: ${message}
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Error sending contact email:", err);
    return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 });
  }
}
