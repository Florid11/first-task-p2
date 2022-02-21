import React,{useState} from "react";
import { FaAngleRight , FaRegUserCircle } from "react-icons/fa";
import "./Toggle.css";
import { IconContext } from "react-icons";
import {DataToggle} from "./ToggleData";



const ToggleState = (props) => {
    const [toggle, setToggle] = useState(false);
    const [btnToggle, setBtnToggle] = useState(false);

    const ToggleSwitch = () => {
        setToggle(!toggle);
      btnToggle ? setBtnToggle(false) : setBtnToggle(true);
    }

    const Data = (props) => {
        const [showData, setShowData] = useState(false);
        function show(){
            setShowData(!showData)
        };

      return(
          <div className='topics'>
            <h5>{props.title}</h5>
              <button onClick={() => setShowData(!showData)} className={showData ? "btnSClicked" : "btnS"} ><FaAngleRight /></button>
              <div>
                  <p>{showData ? props.paragraphs : null}</p>
              </div>
          </div>
      )
    }

  return(
    <div className="boxTopic">
            <div className="user">
                <p><IconContext.Provider value={{className: "userIcon"}}><FaRegUserCircle /></IconContext.Provider></p>
            </div>
            <div className="about">
                <h1>About Us</h1>
                <p>4 articles in this Topic</p>
            </div>
            <div className="button">
                <button onClick={ToggleSwitch} className={btnToggle ? "btnClicked" : "btn"} ><FaAngleRight /></button>
                <div className="topic">
                    {
                        toggle ? DataToggle.map((props) =>{
                            return(
                            <Data key={props.key} title={props.title} paragraphs={props.paragraphs} />
                        )}) : null
                    }

                </div>
            </div>


    </div>
  );
}

export default ToggleState;