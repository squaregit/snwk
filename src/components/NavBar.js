import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import logo from "../assets/square_network_logo.png";
import mobile_logo from "../assets/logo_squarenetwork.jpg";
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

  const toggleSubNav = () => {
    setIsSubNavOpen(!isSubNavOpen);
  };
    
  
  return (
    <>
    
      <nav className="navbar">
        <div className="container">

        <div className="nav-container">

          <NavLink exact to="/" className="nav-logo">
             <img  src={logo} className="square_logo" alt="logo" />
             <img  src={mobile_logo} className="mobile_logo" alt="logo" />

            {/* <span>Square Network</span> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
           
           
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Solutions & Services</CDropdownToggle>
              <CDropdownMenu>

                <CDropdownItem href="#">Cyber Security Solutions</CDropdownItem>
                <CDropdownItem href="#"> Networking Solutions</CDropdownItem>
               
                <CDropdownItem href="#">IT Managed Services</CDropdownItem>
                <CDropdownItem href="#">PC and Enterprise Solution</CDropdownItem>
                

              </CDropdownMenu>
            </CDropdown>

            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Success Stories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to=""
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >Product
              </NavLink>
            </li>
           
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>

        </div>

        </div>

      </nav>
    </>
  );
}

export default NavBar;
