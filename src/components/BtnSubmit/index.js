import './BtnSubmit.css'

const BtnSubmit = (props) =>{
    return(
        <button className='BtnSubmit'>
            {props.texto}
        </button>
    )
}
export default BtnSubmit