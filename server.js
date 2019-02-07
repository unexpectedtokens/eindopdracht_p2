const express = require("express");
const hbs = require("hbs");
const bp = require("body-parser");
const nodemailer = require("nodemailer");
let urlEncodedParser = bp.urlencoded({ extended: true });
const app = express();
var port = process.env.PORT;
app.set("view-engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("frontpage.hbs");
});
app.get("/contact", (req, res) => {
  res.render("contacted.hbs");
});
app.post("/contact", urlEncodedParser, (req, res) => {
  let email = req.body.email;
  let message = req.body.message;
  res.render("contacted.hbs", { email: email, message: message });
});
app.post("/formed", urlEncodedParser, (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let address = req.body.address;
  let ads = req.body.ads;
  async function main() {
    let account = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "nodemailertest999@gmail.com",
        pass: "nodemailertest"
      }
    });

    let mailOptions = {
      from: '"DanieldeJong" <tyg@emailservice.com>',
      to: email,
      subject: `${name}'s order`,
      text: `Your order has been received, it will be delivered to the following address within two days: ${address}` // plain text body
    };

    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main().catch(console.error);
  res.render("formed.hbs", { name, email, phone, address, ads });
});
app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
