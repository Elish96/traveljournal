import React from 'react';
import './TourCard.css';
import LocateIcon from './Assets/icons/location-pin.png'

const TourCard =(props)=>{
    console.log(props)

    let googlinkText;
    if(props.items.googleMapsUrl){
        googlinkText='View Google Maps'
    }

    return (
        <section id="card--main">
            <div id="card--holder">
                 
                <img src={props.items.imageUrl} alt='image' id="tour--pic" title='tour image'/>
                <div id='card--info'>
                    <div id='navigate--info'>
                            <img src={LocateIcon} alt='navigateIcon' id="l-icon"/>
                             <p id='locate--info'>
                                <span className="moveup loca">{props.items.location} </span> 
                                <span className="moveup "> <a href={props.items.googleMapsUrl} className="google">{googlinkText}</a> </span>
                            </p>
                            
                    </div>
                        <h2 id='title'>{props.items.title}</h2>
                    <div id="describe">
                        <p><span className='date' title='start-date'>{props.items.startDate}</span> - <span className='date' title='end-date'> {props.items.endDate}</span></p>
                         <p id='des'>{props.items.description}</p>
                    </div>
                    
                </div>
               
            </div>
            <hr/>
        </section>
    ) 
};

export default TourCard;