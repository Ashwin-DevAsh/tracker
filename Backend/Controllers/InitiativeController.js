const InitiativeService = require('../Services/InitiativeService')
const UserService = require('../Services/UsersService')

class UserController{
    initiativeService = new InitiativeService()
    userService = new UserService()

    createInitiative = async (req,res)=>{
        try{
            const {name,description,images} = req.body
            const userID = (await this.userService.getUserFromtoken(req.get('token'))).id
            if(name==undefined || description==undefined || images==undefined ){
                throw Error("invalid_body")
            }

            const id = await this.initiativeService.createInitiative(userID,name,description,images)
            res.status(200).json({
                isSuccess:true,
                id
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