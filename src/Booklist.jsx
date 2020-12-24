import React from 'react';

import './index.css';

function Card(props) {
    return(
        <>
        
            <div className="card">
                <img  id="img"src={props.imgsrc} alt="war and peace"/>
                <div className="detail">{props.author}</div>
                 <div className="title">{props.title}</div>
                <a href={props.link}>
                <button className="button"  type="submit">Get Detail</button>
                </a>
          
            
        </div>
</>
    );
    
}

export default Card;
