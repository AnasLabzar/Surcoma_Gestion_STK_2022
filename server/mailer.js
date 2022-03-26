var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'principeanas80@gmail.com',
    pass: 'easycafe'
  }
});

var mailOptions = {
  from: 'principeanas80@gmail.com',
  to: 'ajsmarrakechmedina@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hello friend'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("anas", error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});