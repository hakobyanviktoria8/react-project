import { Link } from "react-router-dom";

const NavLink = ({ to, title, handleClick, isActive }) => {
    return (
      <Link
        to={to}
        onClick={handleClick}
        className={isActive ? "active" : ""}
      >
        {title}
      </Link>
    );
};

export default NavLink