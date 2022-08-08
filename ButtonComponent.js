import {useState,useRef} from 'react'

function ButtonComponent(props) {
    const {colors} = props;
    const [colorIndex,setColorIndex]=useState(0);
    const button = useRef(null);

    function handleClick(){
        //check if colors array exists
        if(colors){
          //manage color index boundaries
          colorIndex>=colors.length-1?setColorIndex(0):setColorIndex(prev=>prev+1);
          //change color of button
          button.current.style.backgroundColor =colors[colorIndex];
        }
    }

    return (
    <button onClick={handleClick} ref={button}> ButtonComponent </button>
    )
}

export default ButtonComponent