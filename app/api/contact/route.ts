import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  console.log("🚀 POST /api/contact called");

  const body = await req.json();
  console.log("📨 Request Body:", body);

  const { name, email, phone, community } = body;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const response = await resend.emails.send({
      from: "Sun State HOA <noreply@sunstatehoa.com>",
      to: "admin@sunstatehoa.com",
      subject: "New Contact Request from Website",
      html: `
        <h2>New HOA Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Community:</strong> ${community}</p>
      `,
    });

    console.log("✅ Email sent response:", response);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
