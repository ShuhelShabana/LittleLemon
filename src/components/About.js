import React from 'react';
import { Element } from 'react-scroll';
import './About.css';

const About = () => {
    return (
        <Element name='about' className='about-container'>
            <div className="about-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
                </p>
                <p>
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
            </div>
            <div className="about-images">
                <img src='/icons/ma.jpg' alt='Mario and Adrian' className='avatar'/>
                <img src='/icons/ma2.jpg' alt='Mario and Adrian' className='avatar'/>
            </div>
        </Element>
    );
};

export default About;