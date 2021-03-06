const nodemailer = require("nodemailer");


module.exports = class EmailService{
     myEmail = "cooper.initiative@gmail.com";
     myPassword = "Ashwin@123";

     transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: this.myEmail,
          pass: this.myPassword,
        },
      });

      async sendMail(subject, text, toEmail) {
        var mailOptions = {
          from: `Cooper Initiative <${this.myEmail}>`,
          to:   toEmail,
          subject: subject,
          html: text,
        };
      
        try {
          var result = await this.transporter.sendMail(mailOptions);
          console.log(result);
          return true;
        } catch (e) {
          console.log(e);
          return false;
        }
      }

}