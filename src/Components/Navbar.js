import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Nav, Dropdown } from 'react-bootstrap';

// import Signup from './pages/Signup';
//import { Button } from './Button';
import './Button.css';
import './Navbar.css';





function Navbar() {

  const history = useHistory();
  const users = JSON.stringify(localStorage.getItem('user-info'));

  function logout() {
    localStorage.clear();
    history.push('/Signup');
  }
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    }
    else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []

  );
  window.addEventListener('resize', setButton);
  return (

    <>
      <div>

        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              Modern Walk
              <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

              {
                localStorage.getItem('user-info') ?
                  <>
                    <li className='nav-item'>

                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                      </Link>

                    </li>
                    <li className='nav-item'>
                      <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                        Products
                      </Link>
                     </li>
                    


                  </>
                  :
                  <>


                    <li className='nav-item'>
                      <Link to='/Login' className='nav-links' onClick={closeMobileMenu}>
                        Login
                      </Link>

                    </li>
                    <li className='nav-item'>
                      <Link to='/Signup' className='nav-links' onClick={closeMobileMenu}>
                        Sign-up
                      </Link>

                    </li>
                  </>

              }
              {
                localStorage.getItem('user-info') ?
                  <Nav>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {users.email}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                        <Dropdown.Item onClick={logout}>Profile</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </Nav>
                  :
                  null
              }


            </ul>
            {/* {Button && <Button buttonStyle='btn--outline'> SIGN UP</Button>} */}

          </div>

        </nav>




      </div>
    </>

  );
}

export default Navbar;