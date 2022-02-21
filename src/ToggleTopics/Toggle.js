import React,{useState} from "react";
import { FaAngleRight , FaRegUserCircle } from "react-icons/fa";
import "./Toggle.css";
import { IconContext } from "react-icons";



const ToggleState = () => {
    const [toggle, setToggle] = useState(false);
    const [btnToggle, setBtnToggle] = useState(false);
    const [pToggle, setPToggle] = useState(false);
    const [btnSToggle, setSBtnToggle] = useState(false);



    const ToggleSwitch = () => {
        setToggle(!toggle);
      btnToggle ? setBtnToggle(false) : setBtnToggle(true);
    }

    const ToggleSSwitch = (key) => {
            setPToggle(!pToggle);
            btnSToggle ? setSBtnToggle(false) : setSBtnToggle(true);

    }

    const topics =[
        {
            key: '1',
            title: 'How does ParkName seperate itself from other domain name parking companies?',
            paragraphs: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.'
        },
        {
            key: '2',
            title: 'Is ParkName Parking actually free?',
            paragraphs: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.'
        },
        {
            key: '3',
            title: 'What you do?',
            paragraphs: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.'
        },
        {
            key: '4',
            title: 'When was Parkname first founded?',
            paragraphs: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.'
        },
    ]

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
                        toggle ? (topics.map(topic =>{
                            return(
                                <div className="topics" id={topic.key}>
                                    {topic.title}
                                    <button key={topic.key} onClick={ToggleSSwitch} className={btnSToggle ? "btnSClicked" : "btnS"} ><FaAngleRight /></button>

                                    <p>{ pToggle ? topic.paragraphs : null}</p>
                                </div>
                            )
                        })) : null
                    }
                </div>
            </div>


    </div>
  );
}

export default ToggleState;