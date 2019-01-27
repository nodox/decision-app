const NATS = require('nats')
const nodemailer = require("nodemailer")

// async..await is not allowed in global scope, must use a wrapper
async function main() {

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let account = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: `ysem3lemqran2ko4@ethereal.email`, // generated ethereal user
      pass: `sQtNmf8VQdJmmFFeWN` // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  console.log("=====================================================")

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


const nats = NATS.connect({ 
  url: "nats://localhost:4222",
  preserveBuffers: true,
})


nats.subscribe('foo', function(msg) {
  console.log(`Mailer has a msg: ${msg}`)

  main().catch(console.error);
});
