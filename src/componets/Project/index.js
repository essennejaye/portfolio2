import React from 'react';

const Project = ({ project }) => {
  const { name, description, link, repo } = project;

  return (
    <div className='project-container' key={name}>
      <div className='project-img'>
        <img
          src={require(`../../assets/project-pics/${name}.png`)}
          alt={name}
        />
      </div>
      <div className='text-block '>
        <p>{description}</p>
        <button>
          <a href={link} target='_blank' rel='noopener noreferrer'className='button-link'>Website</a>
        </button>
        <button>
          <a href={repo} target='_blank' rel='noopener noreferrer' className='button-link'><i className='fab fa-github fa-2x'></i></a>
        </button>
      </div>

    </div>
  )
}

export default Project;
