import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="logo">
                <span> Sutsiki </span>
            </div>
            <div className="mainMenu">
                <ul>
                <li>
                    <NavLink to='/'> Accueil  </NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio"> Portfolio </NavLink>
                </li>
                <li>
                    <NavLink to="/galerie"> Galerie </NavLink>
                </li>
                <li>
                    <NavLink to ="/contact"> Contact </NavLink>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;