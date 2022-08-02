import {Link, NavLink } from "react-router-dom";

function Header(){
    return(
        <>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                    <div className="navbar-header">
                    <Link className="navbar-brand" to="#">Habesha Dating</Link>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active" >  
                      <NavLink to="/" >Home</NavLink>
                    </li>
                    <li>  
                        <NavLink to="/about">About</NavLink>
                    </li>
                    </ul>
            </div>
            </nav>     
     </>
    )
      
    

    
}export default Header;