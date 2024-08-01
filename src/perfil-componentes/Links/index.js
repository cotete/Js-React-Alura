
import "./Links.css"

const Links = (props) =>{

    return(
        <div className="area">
            <p onClick={props.onClick} className="link">{props.name}</p>
        </div>
    )
}

export default Links