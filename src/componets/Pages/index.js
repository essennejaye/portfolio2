import React from 'react';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';

const Pages = ({ currentPage }) => {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'project':
        return <Projects />;
      case 'resume':
        return <Resume />
      default:
        return <About />
    }
  };
  return (
    <div>
      {renderPage()}
    </div>
  )
}

export default Pages;
