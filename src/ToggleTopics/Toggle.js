import React,{useState} from "react";
import { FaAngleRight , FaRegUserCircle } from "react-icons/fa";
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
                <p className={classes.user}><FaRegUserCircle /></p>
            </div>
            <div>
                <h1>About Us</h1>
                <p>4 articles in this Topic</p>
            </div>
        </div>

    </div>
  );
}

export default ToggleState;