var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amadoutidianesow059@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'amadoutidianesow059@gmail.com',
  to: 'Amadoutidianesow059@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});