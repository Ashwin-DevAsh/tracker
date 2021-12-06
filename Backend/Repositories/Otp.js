const client = require('./Cache/redis')

class Otp{

    insertOtp = async (email,otp,otpFor,user)=>{
        try{
            const value = {
                otp,
                otpFor,
                user,
                tries:0
            }
            await client.set(email, JSON.stringify(value));
            return true;
        }catch(e){
            console.log(e)
            return false
        }
    }


    checkOtpExist = async (email)=>{
        try{
            const value = JSON.parse(await client.get(email));
            if(!value){
                return null
            }
            value.tries += 1
            await client.set(email, JSON.stringify(value));
            return value;
        }catch(e){
            console.log(e)
            return null
        }
    }


    deleteOtp = async (email)=>{
        try{
            await client.flushall(email)
            return true;
        }catch(e){
            return false
        }
    }

}

module.exports = Otp