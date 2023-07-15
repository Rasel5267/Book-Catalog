import { useEffect, useState } from 'react';
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineHeart,
  AiOutlineRead,
  AiOutlineCheckCircle,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isLoggedIn] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileOpen(!isProfileOpen);
    setSearchOpen(false);
  };

  const handleSearch = () => {
    setSearchOpen(!isSearchOpen);
    setProfileOpen(false);
  };

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setSearchOpen(false);
    setProfileOpen(false);
  };

  const handleSubmit = () => {
    // handle submit
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="menu-icon" onClick={handleMenu}>
        <AiOutlineMenu />
      </div>
      <Link to="/" className="logo">
        BookCatalog
      </Link>
      <div className={isMenuOpen ? 'nav-items active' : 'nav-items'}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/books">All Books</NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/add-book" className="book-btn">
              Add Books
            </NavLink>
          </li>
        )}
      </div>
      <div className="search-icon" onClick={handleSearch}>
        <AiOutlineSearch />
      </div>
      <form onSubmit={handleSubmit} className={isSearchOpen ? 'active' : ''}>
        <input
          type="search"
          placeholder="Search Books..."
          className="search-data"
          required
        />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="profile-btn" onClick={handleProfileClick}>
        <AiOutlineUser />
      </div>
      <div
        className={isProfileOpen ? 'profile-wrapper active' : 'profile-wrapper'}
      >
        {isLoggedIn ? (
          <>
            <NavLink to="/wish-list" className="profile-item">
              <AiOutlineHeart />
              <span>Wishlist</span>
            </NavLink>
            <NavLink to="/reading-list" className="profile-item">
              <AiOutlineRead />
              <span>Reading List</span>
            </NavLink>
            <NavLink to="/finished-books" className="profile-item">
              <AiOutlineCheckCircle />
              <span>Finished Books</span>
            </NavLink>
            <div className="profile-item">
              <BiLogOut />
              <span>Logout</span>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/login" className="profile-item">
              <BiLogIn />
              <span>Login</span>
            </NavLink>
            <NavLink to="/signup" className="profile-item">
              <AiOutlineUserAdd />
              <span>Signup</span>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
