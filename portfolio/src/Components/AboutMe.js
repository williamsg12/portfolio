import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <card>
            <h1 className='about-header'>About ME</h1>
            <article className='about-description'>My name is Gary Williams Jr. I am a Software Developer with a deep passion for programming. In my youth I mananged to get into an engineering program for a charter school in my local area which ignited my passion. After Graduating Highschool I traveled outside of my home state of Georgia To Chicago,Illinois,where I was accepted for a web developement internship.  </article>
           </card>
           <card>
            <h2>Skills</h2>
            <p>Javascript/HTML/CSS/Python/Node/Express/Postgresql</p>
            </card>
        </div>
    );
};

export default AboutMe;