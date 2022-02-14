import React,{useState} from "react";
import { FaAngleRight , FaRegUserCircle } from "react-icons/fa";
import classes from "./Toggle.module.css";


const ToggleState = (props) => {
    const [toggle, setToggle] = useState(false);
    const [pToggle, setPToggle] = useState(false);
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
    <div className={classes.boxtopic}>
        <div className={classes.about}>
            <div>
                <p className={classes.user}><FaRegUserCircle /></p>
            </div>
            <div>
                <h1>About Us</h1>
                <p>4 articles in this Topic</p>
            </div>
            <button onClick={()=>setToggle(!toggle)}><FaAngleRight /></button>
            {
                toggle ? (topics.map(topic =>{
                    return(
                        <div>
                            {topic.title}
                            <button onClick={()=>setPToggle(!pToggle)}><FaAngleRight /></button>
                            {pToggle ? topic.paragraphs : null}
                        </div>
                    )
                })) : null
            }
        </div>

    </div>
  );
}

export default ToggleState;