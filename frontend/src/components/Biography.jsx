import React from "react";

const Biography = ({imageUrl}) => {
    return(
        <div className='container biography'>
            <div className="banner">
                <img src={imageUrl} alt="aboutPicture" />

            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who We Are</h3>
                <p>
                At CareStream, we are at the forefront of transforming healthcare 
                management through cutting-edge technology and innovative solutions. 
                Our mission is to empower healthcare institutions with tools that streamline 
                operations, enhance patient care, and optimize resource management. 
                We believe that effective healthcare delivery is built on precision, efficiency, 
                and a deep understanding of patient needs.
                </p>
                <p>Our platform is meticulously crafted by a diverse team of healthcare professionals, 
                    software engineers, and industry experts who share a common goal: 
                    To simplify the complexities of hospital management.
                    </p>
                <p>By integrating modern technology with best practices in healthcare,</p>
                <p>CareStream offers a robust and intuitive system that supports 
                   the entire patient journey—from appointment scheduling to post-treatment follow-ups.
                   We are committed to fostering a culture of excellence, where continuous improvement and 
                   Customer satisfaction are at the heart of what we do.
                   </p>
                  <p>Our vision is to be the leading provider of hospital management solutions.</p>
                  <p>We strive to enhance the quality of healthcare services.</p>
                  
            </div>

        </div>
    )
};
export default Biography;