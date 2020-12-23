import React, { useState } from 'react';
import '../src/index.css';
import Header from './componets/Header';
import Nav from './componets/Nav';
import Pages from './componets/Pages';
import Footer from './componets/Footer';


function App() {
  const [pages] = useState([
    {
      name: 'about'
    },
    {
      name: 'projects'
    },
    {
      name: 'resume'
    },
  ])
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}>
        </Nav>
      </Header>
      <main >
        <Pages currentPage={currentPage} />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
