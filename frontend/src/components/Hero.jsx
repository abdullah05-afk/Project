import React from "react";

const Hero = ({title, imageUrl}) => {
    return(
        <div className="hero container" >
            <div className="banner">
                <h1>{title}</h1>
                <p>
                CareStream is a state-of-the-art hospital management system that
                enhances healthcare operations through precision-driven solutions. 
                It streamlines patient care and administrative processes, ensuring 
                operational excellence and improved patient outcomes with advanced,efficient tools.
                </p>

            </div>
            <div className="banner">
                <img src={imageUrl} alt="hero" className= "animated-image" />
                <span>
                    <img src="/Vector.png" alt='Vector' />
                </span>
            </div>

        </div>
    );
};
export default Hero;