import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Header = ({ filterWithName }) => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const logOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('user');
    window.location.replace('/login');
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const performSearch = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      setErrorMessage('');
      return;
    }

    const lowerKey = searchTerm.toLowerCase();
    const searchResults = filterWithName(lowerKey);

    if (!searchResults.length) {
      setErrorMessage('Apartment name not found');
    } else {
      setErrorMessage('');
      setSearchTerm(''); // Clear search term on success
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/home" onClick={() => window.location.reload()}>
                  Husky Homes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home" onClick={() => window.location.reload()}>
                  Apartments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={(e) => logOut(e)} to="/">
                  Log Out
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={performSearch}>
              <input
                className="form-control me-2"
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
