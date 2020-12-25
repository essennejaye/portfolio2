import React from 'react';
import  Carousel  from 'react-bootstrap/Carousel';

const Projects = () => {
  const projectList = [
    {
      name: 'mydigilib',
      description: 'An node.js application to digitally catalog your home library. It performs a search for your book based on the ISBN.\nFull Stack Mern Project',
      link: 'https://mydigilib.herokuapp.com/',
      repo: 'https://github.com/essennejaye/mydigilib'
    },
    {
      name: 'my-schtick-kick',
      description: ' A MVC CMS-style blog site for hobby enthusiasts. \nGroup Project \nJavascript, Node, Express \nSequelize ORM, Bootstrap',
      link: 'https://fathomless-waters-65385.herokuapp.com/',
      repo: 'https://github.com/essennejaye/myschtickkick'
    },
    {
      name: 'web-dev-op-ed',
      description: 'A CMS-style MVC blog site for web developers. \nJavascript, Node, Express \nSequelize ORM, Handlebars \nBootstrap',
      link: 'https://ancient-dawn-54812.herokuapp.com/',
      repo: 'https://github.com/essennejaye/dev-op'
    },
    {
      name: 'rv-roadtrip',
      description: 'A website that provides information on recreational vehicle campsites and local weather for US National Parks. \nGroup Project \nHTML, CSS, Javascript \nJQuery, Bulma',
      link: "https://essennejaye.github.io/rv-roadtrip/",
      repo: "https://github.com/essennejaye/rv-roadtrip"
    },
    {
      name: 'weather-dashboard',
      description: 'A weather dashboard that presents the current and 5 day forecast weather conditions for a searched city. \nHTML, CSS \nJavascript, jQuery',
      link: 'https://essennejaye.github.io/city-forecast/',
      repo: 'https://github.com/essennejaye/city-forecast'
    },
    {
      name: 'workday-scheduler',
      description: 'A weekday, workday time management planner. \nHTML, CSS \nJavascript, jQuery',
      link: 'https://essennejaye.github.io/coder-calender',
      repo: 'https://github.com/essennejaye/coder-calender'
    },
  ];

  return (
    <div>
      <Carousel>
        {projectList.map((project, idx) => (
          <Carousel.Item key={idx}>
            <img
            className='d-block w-100'
              src={require(`../../assets/project-pics/${project.name}.png`)}
              alt={project.name}
            />
            <Carousel.Caption className='carousel-caption'>
            <p>{project.description}</p>
            <button>
              <a href={project.link} target='_blank' rel='noopener noreferrer' className='button-link'>Website</a>
            </button>
            <button>
              <a href={project.repo} target='_blank' rel='noopener noreferrer' className='button-link'><i className='fab fa-github fa-1x'></i></a>
            </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Projects;
