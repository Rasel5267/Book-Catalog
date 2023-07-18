import { logout } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hook';
import { useState } from 'react';
import {
  AiOutlineCheckCircle,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineRead,
  AiOutlineSearch,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const storedAuthData = localStorage.getItem('auth');
  const token = storedAuthData ? JSON.parse(storedAuthData).token : null;

  const onFinishHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(searchTerm)}`);
  };

  const handleSearch = () => {
    setSearchOpen(!isSearchOpen);
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    setSearchOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    dispatch(logout());
    window.location.reload();
  };

  return (
    <div className="bg-white border-b py-2">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Link to="/" className="normal-case text-2xl">
            BookCatalog
          </Link>
        </div>
        <div
          className={`flex-1 md:static md:ml-8 absolute bg-white md:min-h-fit min-h-[100vh] z-50 left-0 w-full md:w-auto flex pt-32 md:pt-0 px-8 md:px-0 ${
            isMenuOpen ? 'top-[10%]' : 'top-[-100%]'
          }`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/" className="hover:text-gray-500">
                Home
              </NavLink>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/books" className="hover:text-gray-500">
                All Books
              </NavLink>
            </li>
            {token && (
              <li
                className="bg-emerald-600 text-gray-100 px-5 py-2 rounded-sm hover:bg-gray-800 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <NavLink to="books/add-book">Add Books</NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`form-control absolute md:static top-16 sm:top-12 right-[4%] w-[70vw] md:top-0 md:right-0 md:w-[27vw] md:scale-x-100 md:scale-y-100 z-50 ${
              isSearchOpen ? 'scale-x-100 scale-y-100' : 'scale-x-0 scale-y-0'
            }`}
          >
            <form onSubmit={onFinishHandler} className="card">
              <input
                type="search"
                placeholder="Search Book"
                required
                className="p-2 border outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
          <div
            className="md:hidden flex items-center text-3xl cursor-pointer"
            onClick={handleSearch}
          >
            <AiOutlineSearch />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://res.cloudinary.com/mahadiul5267/image/upload/v1689428765/pngwing.com_mpq78k.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {token ? (
                <>
                  <NavLink
                    to="/wish-list"
                    className="flex items-center gap-3 text-xl mb-3"
                  >
                    <AiOutlineHeart />
                    <span>Wishlist</span>
                  </NavLink>
                  <NavLink
                    to="/reading-list"
                    className="flex items-center gap-3 text-xl mb-3"
                  >
                    <AiOutlineRead />
                    <span>Reading List</span>
                  </NavLink>
                  <NavLink
                    to="/finished-books"
                    className="flex items-center gap-3 text-xl mb-3"
                  >
                    <AiOutlineCheckCircle />
                    <span>Finished Books</span>
                  </NavLink>
                  <div
                    className="flex items-center gap-3 text-xl cursor-pointer"
                    onClick={handleLogout}
                  >
                    <BiLogOut />
                    <span>Logout</span>
                  </div>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="flex items-center gap-3 text-xl mb-3"
                  >
                    <BiLogIn />
                    <span>Login</span>
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="flex items-center gap-3 text-xl"
                  >
                    <AiOutlineUserAdd />
                    <span>Signup</span>
                  </NavLink>
                </>
              )}
            </ul>
          </div>
          <div
            className="md:hidden flex items-center text-3xl cursor-pointer"
            onClick={handleMenuToggle}
          >
            <AiOutlineMenu />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
