const UserService = require('../Services/UsersService')

class UserController{
    userService = new UserService()

    login = async (req,res)=>{
        try{
            const {email,password} = req.body
            if(!email || !password){
                throw Error("invalid_body")
            }
            const result =  await this.userService.login(email,password)
            res.status(200).json({
                isSuccess:true,
                result
            })

        }catch(err){
            console.log(err)
            res.status(200).json({
                isSuccess:false,
                errorMessage:err.message
            })
        }

    }


    getOtp = async (req,res)=>{
        try{
            const {email,password,name,phoneNumber} = req.body

            if(!email || !password || !name || !phoneNumber){
                throw Error("invalid_body")
            }
            const otp =  await this.userService.getOtp(name,password,email,phoneNumber)
            console.log(otp)
            res.status(200).json({
                isSuccess:true,
            })

        }catch(err){
            console.log(err)
            res.status(200).json({
                isSuccess:false,
                errorMessage:err.message
            })
        }

    }

    signup = async (req,res)=>{
        try{
            const {email,otp} = req.body
            if(!email || !otp){
                throw Error("invalid_body")
            }
            const result =  await this.userService.signup(email,otp)
            console.log(otp)
            res.status(200).json({
                isSuccess:true,
                result
            })

        }catch(err){
            console.log(err)
            res.status(200).json({
                isSuccess:false,
                errorMessage:err.message
            })
        }

    }


    isSessionAlive = async (req,res)=>{
        try{
            const {token} = req.body
            if(!token){
                throw Error("invalid_body")
            }
            const isSessionAlive =  await this.userService.isSessionAlive(token)
            res.status(200).json({
                isSuccess:true,
                isSessionAlive
            })

        }catch(err){
            console.log(err)
            res.status(200).json({
                isSuccess:false,
                errorMessage:err.message
            })
        }

    }


    getUser = async (req,res)=>{
        console.log("Getting user")

        try{
            const token = req.get('token')
            if(!token){
                throw Error("missing_auth_token")
            }
            const user =  await this.userService.getUserFromtoken(token)
            res.status(200).json({
                isSuccess:true,
                user
            })

        }catch(err){
            console.log(err)
            res.status(200).json({
                isSuccess:false,
                errorMessage:err.message
            })
        }

    }

}

module.exports = UserController