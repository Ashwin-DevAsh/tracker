const Initiative = require('../Repositories/Initiative')

class InitiativeService{
    initiative = new Initiative()

    createInitiative = async(userID,name,description,images)=>{
        const id =  await this.initiative.insertInitative(
            name,description,images,userID,'CREATED'
        )
        return id
    }

}

module.exports = InitiativeService