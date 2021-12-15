const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Otp = require("../Repositories/Otp")
const Users = require("../Repositories/Users")
const EmailService = require("./EmailService")


class UserService{

    users = new Users()
    otp = new Otp()
    emailService = new EmailService()

    login = async(email,password)=>{

       var user = await  this.users.getUserByEmail(email)
       console.log(user)
       if(!user){
           throw Error("user_not_found")
       }

       var isPasswordVerified = bcrypt.compareSync(password, user.password);

       if(!isPasswordVerified){
           throw Error("invalid_password")   
       }

       var token = jwt.sign(
        {
          name: user.name,
          number: user.phone_number,
          email: user.email,
          id: user.id
        },
        process.env.PRIVATE_KEY,
        {
            expiresIn: '24h' 
        }
      );
      return token
    }

    getOtp = async(name,password,email,phoneNumber)=>{
        var isEmailExist = await this.users.getUserByEmail(email)
        if(isEmailExist){
            throw Error("email_already_exist")
        }

        var isPhoneNumberExist = await this.users.getUserByPhoneNumber(phoneNumber)
        if(isPhoneNumberExist){
            throw Error("phonenumber_already_exist")
        }


        var otpNumber = Math.floor(1000 + Math.random() * 9000);
        this.emailService.sendMail(
            "Otp Verification",
            `${otpNumber}`,
             email
        )
        var salt = await bcrypt.genSalt(10);
        var hashedPassword = await bcrypt.hash(password, salt);
        const user = {
            name,
            phoneNumber,
            email,
            password:hashedPassword
        }
        this.otp.insertOtp(email,otpNumber,'signup',user)
        return otpNumber
    }

    signup = async(email,otpNumber)=>{
        const otpData = await this.otp.checkOtpDataExist(email,'signup')
        if(!otpData){
            throw Error("otp_not_exist")
        }
        const {payload:user,otp,otp_for:otpFor,tries} = otpData
        if(otp!=otpNumber || otpFor !='signup'){
            throw Error("invalid_otp")
        }
        if(tries>10){
            this.otp.deleteOtpData(email)
            throw Error("more_attempt")
        }
        await this.users.insertUser(user.name,user.phoneNumber,user.email,user.password)
        await this.otp.deleteOtpData(email,'signup')

        var token = jwt.sign(
            {
              name: user.name,
              number: user.phone_number,
              email: user.email,
              id: user.id
            },
            process.env.PRIVATE_KEY,
            {
                expiresIn: '24h' 
            }
        );

        return token

    }

    isSessionAlive = async(token)=>{
        var email = await jwt.verify(token,process.env.PRIVATE_KEY).email
        var user = await this.users.getUserByEmail(email)
        console.log("user =",user)
        if(user){
            return true
        }else{
            return false
        }
    }
    
}

module.exports = UserService