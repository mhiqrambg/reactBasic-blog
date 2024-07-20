import { NavLink, Outlet } from 'react-router-dom';
import '../../styles/navlink.css';

const rootLayouts = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to={'/'}>Home</NavLink>|<NavLink to={'/blog'}>Blogs</NavLink>|
        <NavLink to={'/about'}>About</NavLink>
        <Outlet />
      </div>
    </>
  );
};

export default rootLayouts;
