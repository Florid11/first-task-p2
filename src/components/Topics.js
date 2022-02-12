import React from "react";
import ToggleState from "../ToggleTopics/Toggle";
import "./Topics.css"

const Topic = () => {
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
    <div className='.topic'>
        <h1>About us</h1>
        <div>
            {topics.map((topic =>
                    <ToggleState key={topic.key} title={topic.title} paragraphs={topic.paragraphs} />
            ))}
        </div>

    </div>
  );
}

export default Topic;