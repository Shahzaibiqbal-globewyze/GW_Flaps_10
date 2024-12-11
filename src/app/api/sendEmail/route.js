import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "globewyze1@gmail.com",
        pass: "bxbwdfnqmbicksic",
      }
    });
//have to change the email to gw admin
    const mailOptions = {
      from: '"Globewyze Admin" <globewyze1@gmail.com>',
      to: "lareb.saeed@globewyze.com",
      subject: "New User subscribed to Flaps10 newsletter",
      text: `Email: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Newsletter Subscribed successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Something Went Wrong Please Try Again", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
