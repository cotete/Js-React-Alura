import"./userProfile.css"

const UserProfile = (props) =>{


    return(
        <div className="userProfile">
            <img className="userImg" src={props.imgPath}></img>
            <div className="textContainer">
                <h2>{props.nome}</h2>
                <h3>{props.seguro}</h3>
            </div>
        </div>
    )
}

export default UserProfile