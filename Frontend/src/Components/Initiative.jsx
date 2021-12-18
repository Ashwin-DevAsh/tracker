import Avatar from '../Assets/avatar.jpg'

function  Initiative({name,description,userName}) {
    return (
        <div className="initiative-container">

            <div className="header">
                <img src={Avatar}  style={{height:30,marginRight:20,borderRadius:15}} />
                <h4>{userName}</h4>
            </div>
            <div className="content">
                 <h3>{name}</h3>
                 <p>{description}</p>
            </div>

            <div className="footer">
                 <h4> <strong> 0</strong> Controbuters</h4  >
                 <h4> <strong> 0</strong> Contributions</h4  >

            </div>

            
        </div>
    )
}

export default Initiative