import { NavLink } from "react-router-dom";
import React from "react";
export const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <NavLink
        // className={(isActive:boolean, isPending:boolean) =>
        //   isPending
        //     ? "link nav-brand"
        //     : isActive
        //     ? "link nav-brand selected"
        //     : ""
        // }
        to="/"
        // className="link nav-brand"
        className={({ isActive, isPending }) =>
          isPending
            ? "link nav-brand"
            : isActive
            ? "link nav-brand link-active"
            : "link nav-brand"
        }
      >
        tasktrip
      </NavLink>
      <nav className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="/todos"
        >
          todos
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "link-active" : "link"
          }
          to="/about"
        >
          about
        </NavLink>
      </nav>
    </div>
  );
};
