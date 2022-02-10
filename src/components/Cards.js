import React from "react";
import classes from "./Cards.module.css";


const cards = () => {

    const cardData = [
        {
            id:'0',
            name: '.COM',
            price: '$5.99/yr',
            description: 'Instead of $10.99/yr'
        },
        {
            id:'1',
            name: '.AI',
            price: '$5.99/yr',
            description: 'Instead of $10.99/yr'
        },
        {
            id:'2',
            name: '.NET',
            price: '$7.99/yr',
            description: 'Instead of $10.99/yr'
        },
        {
            id:'3',
            name: '.HEALTH',
            price: '$7.99/yr',
            description: 'Instead of $10.99/yr'
        },
        {
            id:'4',
            name: '.CO.UK',
            price: '$3.99/yr',
            description: 'Instead of $10.99/yr'
        },
        {
            id:'5',
            name: '.ORG',
            price: '$15.99/yr',
            description: 'Instead of $19.99/yr'
        },
        {
            id:'6',
            name: '.CO',
            price: '$26.33/yr',
            description: 'Instead of $29.99/yr'
        },
        {
            id:'7',
            name: '.SEA',
            price: '$26.33/yr',
            description: 'Instead of $29.99/yr'
        },

    ];
  return(
      <div className={classes.cardBox}>
          {cardData.map((data) =>{
              return(
                  <div className={classes.dataBox} key={data.id}>
                      <div className={classes.block}>
                          <h1>{data.name}</h1>
                      </div>
                      <div className={classes.block}>
                        <h3>{data.price}</h3>
                          <p>{data.description}</p>
                      </div>
                      <div className={classes.btn}>
                        <button className={classes.dwn_btn}>Buy Now</button>
                      </div>
                  </div>
              );
          })}
      </div>
  );
}

export default cards;