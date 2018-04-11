import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from './Search';



const Header = () => (
  
  <nav className="teal lighten-1">
    <div className="nav-wrapper container teal lighten-1">
    <Link  to='/' className="brand-logo"><i className="material-icons left">tv</i>BitShow</Link>
        <div className="input-field right">
          <SearchBar/>
          
        </div>
      
    </div>
  </nav>
  
)

export default Header;