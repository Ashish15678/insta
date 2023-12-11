import { NextResponse } from "next/server";
const sgMail = require("@sendgrid/mail");
async function GET() {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "15678ashish@gmail.com", // Change to your recipient
    from: "15678ashishk@gmail.com", // Change to your verified sender
    subject: "pdhle gendu",
    text: "nd eaasy to do anywhere, even with Node.js",
    html: "<a href = 'https://www.gogle.com'> <button>A link is here</button></a> ",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error("ERROR", error);
    });

  // async function GET() {
  //   return NextResponse.json({ message: "What made you visit this page" });
  //
  return NextResponse.json({ message: "success" });
}
export { GET };
