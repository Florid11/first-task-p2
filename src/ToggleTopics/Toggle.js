import React,{useState} from "react";
import { FaAngleRight } from "react-icons/fa";


const ToggleState = (props) => {
    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        setToggle((prev) => !prev)
    }

  return(
    <div>
        <button onClick={toggler}><FaAngleRight /></button>
    </div>
  );
}

export default ToggleState;