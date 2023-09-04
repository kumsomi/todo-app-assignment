import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link nav-brand" to="/">
        tasktrip
      </Link>
      <nav className="nav-link">
        <Link className="link" to="/todos">
          todos
        </Link>
        <Link className="link" to="/about">
          about
        </Link>
      </nav>
    </div>
  );
};
