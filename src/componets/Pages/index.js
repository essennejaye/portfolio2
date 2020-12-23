import React from 'react';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
// import PageSelected from '../PageSelected';

const Pages = ({ currentPage }) => {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />
      default:
        return <About />
    }
  };
  return (
    <div>
      {/* <PageSelected> {renderPage()} </PageSelected> */}
      {renderPage()}
    </div>
  )
}

export default Pages;
