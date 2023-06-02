import React from 'react'

import './linewhite.css'

const Linewhite = ({text}) => (
    <div className="line_style_white">
    <hr  data-content={text}></hr>
    </div>
);


export default Linewhite