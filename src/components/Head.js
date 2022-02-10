import React from 'react';
import './Head.css';
import Globe from './Assets/icons/globe.png'

const Head =()=>{
    return (
        <header id="head">
            <img src={Globe} id="globe"/> <span> my travel journal</span>
        </header>
    )
}

export default Head;