const express = require("express");
const bp = require("body-parser");

// const nodemailer = require("nodemailer");
let urlEncodedParser = bp.urlencoded({ extended: false });
const app = express();
var port = process.env.port || 4200;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/contacted.html", (req, res) => {
  res.render("contacted.html");
});

app.post("/contacted.html", urlEncodedParser, (req, res) => {
  console.log(req.body);
  // res.render("/contacted.html");
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
