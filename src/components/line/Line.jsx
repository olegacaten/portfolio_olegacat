import React from 'react'

import './line.css'

const Line = ({text}) => (
    <div className="line_style">
    <hr  data-content={text}  style={
        text?{
            height: "1.5em",
        }:{}
    
    }></hr>
    </div>
);


export default Line