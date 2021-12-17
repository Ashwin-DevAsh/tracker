const UserService = require('../Services/UsersService')

class InitiativeService{
    userService = new UserService()
    
    isSessionAlive = async(req,res,next)=>{
        const token = req.get("token")
        const isAlive = await  this.userService.isSessionAlive(token)
        if(isAlive){
             next()
        }else{
            res.status(401).json({
                isSuccess:false,
            })
        }

    }

}

module.exports = InitiativeService