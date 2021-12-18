const Initiative = require('../Repositories/Initiative')

class InitiativeService{
    initiative = new Initiative()

    createInitiative = async(userID,name,description,images)=>{
        const id =  await this.initiative.insertInitative(
            name,description,images,userID,'CREATED'
        )
        return id
    }

    getAllInitiative = async()=>{
        const initiatives =  await this.initiative.getAllInitiatives()
        return initiatives
    }

}

module.exports = InitiativeService