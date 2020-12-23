import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = (props) => {
  const {
    pages = [],
    setCurrentPage,
    currentPage
  } = props;
  return (
    <nav className='nav-bar'>
      <ul>
        {pages.map((page) => (
          <li className={` ${currentPage.name === page.name
            && 'navActive'
            }`}
            key={page.name}>
            <span
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {capitalizeFirstLetter(page.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;
