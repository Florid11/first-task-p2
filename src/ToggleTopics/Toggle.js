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

<<<<<<< HEAD
    const topics =[
        {
            key: '1',
            title: 'How does ParkName seperate itself from other domain name parking companies?',
            paragraphs1: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.'
        },
        {
            key: '2',
            title: 'Is ParkName Parking actually free?',
            paragraphs2: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.'
        },
        {
            key: '3',
            title: 'What you do?',
            paragraphs3: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.'
        },
        {
            key: '4',
            title: 'When was Parkname first founded?',
            paragraphs4: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.'
        },
    ]

=======
>>>>>>> toggle
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
<<<<<<< HEAD
                                <div className="topics" id={topic.key}>
                                    {topic.title}
<<<<<<< HEAD
                                    <button onClick={ToggleSSwitch} className={btnSToggle ? "btnSClicked" : "btnS"} ><FaAngleRight /></button>
                                    <p>{pToggle ? topic.paragraphs1 : null}</p>
=======
                                    <button key={topic.key} onClick={ToggleSSwitch} className={btnSToggle ? "btnSClicked" : "btnS"} ><FaAngleRight /></button>

                                    <p>{ pToggle ? topic.paragraphs : null}</p>
>>>>>>> toggle
                                </div>
                            )
                        })) : null
=======
                            <Data key={props.key} title={props.title} paragraphs={props.paragraphs} />
                        )}) : null
>>>>>>> toggle
                    }

                </div>
            </div>


    </div>
  );
}

export default ToggleState;