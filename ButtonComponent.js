import {useState,useRef} from 'react'

function ButtonComponent(props) {
    const {colors} = props;
    const [colorIndex,setColorIndex]=useState("");
    const button = useRef(null);

    function handleClick({target}){
        //check if colors array exists
        if(colors){
            
            button.current.style.backgroundColor =
        }

    }

    return (
    <button onClick={handleClick} ref={button}>ButtonComponent</button>
    )
}
const buttonStyle ={
    padding:'8px 15px'
}
export default ButtonComponent