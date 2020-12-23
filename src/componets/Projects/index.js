import React from 'react';
import Project from '../Project';
import ScrollTopArrow from '../ScrollTopArrow';

const Projects = () => {

  const projectList = [
    {
      name: 'mydigilib',
      description: 'An node.js application to digitally catalog your home library. It performs a search for your book based on the ISBN. \n\nFull Stack Mern Project',
      link: 'https://mydigilib.herokuapp.com/',
      repo: 'https://github.com/essennejaye/mydigilib'
    },
    {
      name: 'my-schtick-kick',
      description: ' A MVC CMS-style blog site for hobby enthusiasts. \n\nGroup Project \n\nJavascript, Node, Express \nSequelize ORM, Bootstrap',
      link: 'https://fathomless-waters-65385.herokuapp.com/',
      repo: 'https://github.com/essennejaye/myschtickkick'
    },
    {
      name: 'web-dev-op-ed',
      description: 'A CMS-style MVC blog site for web developers. \n\nJavascript, Node, Express \nSequelize ORM, Handlebars \nBootstrap',
      link: 'https://ancient-dawn-54812.herokuapp.com/',
      repo: 'https://github.com/essennejaye/dev-op'
    },
    {
      name: 'rv-roadtrip',
      description: 'A website that provides information on recreational vehicle campsites and local weather for US National Parks. \n\nGroup Project \n\nHTML, CSS, Javascript \nJQuery, Bulma',
      link: "https://essennejaye.github.io/rv-roadtrip/",
      repo: "https://github.com/essennejaye/rv-roadtrip"
    },
    {
      name: 'weather-dashboard',
      description: 'A weather dashboard that presents the current and 5 day forecast weather conditions for a searched city. \n\nHTML, CSS \nJavascript, jQuery',
      link: 'https://essennejaye.github.io/city-forecast/',
      repo: 'https://github.com/essennejaye/city-forecast'
    },
    {
      name: 'workday-scheduler',
      description: 'A weekday, workday time management planner. \n\nHTML, CSS \nJavascript, jQuery',
      link: 'https://essennejaye.github.io/coder-calender',
      repo: 'https://github.com/essennejaye/coder-calender'
    },
  ];
  return (
    <div>
      <div className='flex-row'>
        {projectList.map((project, idx) => (
          <Project
            project={project}
            key={'project' + idx}
          />
        ))}
      </div>
      <ScrollTopArrow />
    </div>
  )
}

export default Projects;

