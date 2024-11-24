import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lockhomesxii@gmail.com",
        pass: "gdftzlquabnturmk",
      }
    });
//have to change the email
    const mailOptions = {
      from: "lockhomesxii@gmail.com",
      to: "lareb.saeed@globewyze.com",
      subject: "New User subscribed to newsletter",
      text: `Email: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Failed to send email", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
