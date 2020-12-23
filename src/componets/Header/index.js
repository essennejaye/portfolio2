import React from 'react'

const Header = (props) => {

  return (
    <header>
      <h1>Satalia N Jefferson</h1>
      <div className='header-container'>
      <h2>Full Stack Web Developer</h2>
      {props.children}
      </div>
    </header>
  )
}

export default Header;
