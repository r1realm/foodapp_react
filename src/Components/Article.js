import React from 'react';
import Restaurants from '../Data.js';

function Article() {
      const replay= Restaurants.map((i) => {
          return (

      <article className="art1">
          <img src={i.img} alt=" " className="imgMain" />
        <div className="lists">
          <h5 className="name">{i.name}</h5>
          <p className="ratings">ratings: {i.score}</p>
          <p className="distance">{i.location}</p>
          <p className="type">{i.type}</p>
        </div>
      </article>  
          )
      }) 
      return (replay);

      }

export default Article;
