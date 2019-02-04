const express = require("express");
const hbs = require("hbs");
const bp = require("body-parser");

// const nodemailer = require("nodemailer");
let urlEncodedParser = bp.urlencoded({ extended: true });
const app = express();
var port = process.env.port || 4200;
app.set("view-engine", "hbs");
// hbs.registerPartials
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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// let transporter = nodemailer.createTransport({
//   service: "g-mail",
//   auth: {
//     user: "dejong543@gmail.com",
//   }
// });

// let mailOptions = {
//   from: "dejong543@info.com",
//   to: "mputto@icloud.com",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!"
// };

// transporter.sendMail(mailOptions, function(error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });
