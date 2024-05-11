import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<ul className="nav bg-danger ">
  <li className="nav-item ">
    <Link className="nav-link text-dark" to="/contact">Contacts</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-dark" to="/addcontact">Add Contact</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-dark" to="/">Home</Link>
  </li>
 
</ul>
		
	);
};
