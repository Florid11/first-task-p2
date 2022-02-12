import React,{useState} from "react";
import { FaAngleRight } from "react-icons/fa";
import classes from "./Toggle.module.css";


const ToggleState = (props) => {
    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        setToggle((prev) => !prev)
    }

  return(
    <div className={classes.boxtopic}>
        <div>
            <div>

            </div>
        </div>

    </div>
  );
}

export default ToggleState;