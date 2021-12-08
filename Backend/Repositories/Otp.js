const client = require('./Cache/redis')

class Otp{

    insertOtp = async (email,otp,otpFor,user)=>{
        console.log(email)
        try{
            const value = JSON.stringify({
                otp,
                otpFor,
                user,
                tries:0
            })
            await client.set(email, value);
            return true;
        }catch(e){
            console.log(e)
            return false
        }
    }


    checkOtpDataExist = async (email)=>{
        try{
            const value = JSON.parse(await client.get(email));
            console.log(value)
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


    deleteOtpData = async (email)=>{
        try{
            await client.flushall(email)
            return true;
        }catch(e){
            console.log(e)
            return false
        }
    }

}

module.exports = Otp