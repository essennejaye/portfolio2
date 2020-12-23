import React, { useState } from 'react'
import photo from '../../assets/images/ProfilePic.jpg'

const About = () => {
  const [logos] = useState([
    {
      name: 'apollo_client_logo'
    },
    {
      name: 'bootstrap-logo'
    },
    // {
    //   name: 'bulma_logo'
    // },
    {
      name: 'css_logo'
    },
    {
      name: 'express_logo'
    },
    {
      name: 'github_icon'
    },
    {
      name: 'graphql_logo'
    },
    {
      name: 'html-5-logo'
    },
    {
      name: 'jquery_logo'
    },
    {
      name: 'js_logo'
    },
    {
      name: 'mongodb_logo'
    },
    {
      name: 'mysql_logo'
    },
    {
      name: 'nodejs_logo'
    },
    {
      name: 'npm_logo'
    },
    {
      name: 'responsive-web-design'
    },
  ])
  return (
    <div id='root'>
      <section className='section-container'>
        <img className='profile-pic' src={photo} alt='' />
        <div className='about-container'>
          <p>
            I am a self-motivated, creative, hard-working Web Developer with a proficiency in JavaScript technologies. I have a background in healthcare which has fostered effective
            critical thinking and team communication skills and a keen eye for details. Recently, I earned a Master of Science in Information Systems
            from Dakota State University and a certificate for full stack web development from the University of Arizona. I am excited about the opportunity to
            create high-quality, scalable, and lasting web applications.
        </p>
        </div>
      </section>
      <div className='skill-container'>
        <h2>Skills</h2>
        <ul className='skills'>
          {logos.map((logo, idx) => (
            <li key={idx}>
              <img src={require(`../../assets/images/${logo.name}.png`)}
                alt={logo.name}
                 />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className='text-quote'>
          <q>Not everything that is faced can be changed,<br /> but nothing can be changed until it is faced.</q><br />
        James Baldwin
        </p>
      </div>

    </div>
  )
}

export default About;
