import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './navbar.module.css';


function NavBar() {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setName('');
  }
  

  return (
    <div className={style.navBar}>
      <div className={style.menu}>
        <ul>
          <li>
            <Link to='/'> <h3>Back</h3> </Link>
          </li>
          <li>
            <Link to='/home'> <h3>Home</h3> </Link>
          </li>
          <li>
            <Link to='/create'> <h3>Create</h3> </Link>
          </li>
          <li>
            <Link to='/about'>	<h3>About</h3> </Link>
          </li>
          <div className={style.busqueda}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Search videogame ...'
                type='text'>
              </input>
              <NavLink to={`/results/${name}`}>
                <button name='name' type='submit'>
                  {' '}
                  Go!{' '}
                </button>
              </NavLink>
            </form>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;