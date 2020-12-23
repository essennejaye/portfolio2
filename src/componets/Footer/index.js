import React from 'react'


const Footer = () => {
  const links = [
    {
      name: 'fab fa-linkedin',
      linkUrl: 'http://www.linkedin.com/in/satalia-n-jefferson'
    },
    {
      name: 'fab fa-github-square',
      linkUrl: 'https://github.com/essennejaye/'
    },
    {
      name: 'fas fa-envelope-square',
      linkUrl: 'mailto:sjeffers02@gmail.com'
    },
    {
      name: 'far fa-file',
      linkUrl: 'https://drive.google.com/file/d/18MynqDzX489JtVmAh6q-bdxv1qxPY2gu/preview'
    }
  ]
  return (
    <footer className='footer'>
      <div>
        <p>© 2020 Essennejaye</p>
      </div>
      <div className='links'>
        {links.map(link => (
          <a href={link.linkUrl} key={link.name} target='_blank' rel='noopener noreferrer'><i className={`img ${link.name}`}></i></a>
        )
        )}
      </div>
    </footer>
  )
}

export default Footer

