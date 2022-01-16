import React from 'react'
import {Link} from "react-router-dom";
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';


 

export default function Navbar({user}) {
  let history = useHistory();
 
    return (
        < nav >
        <div className="nav-wrapper blue">
          <Link to="/" className="brand-logo">To Do List</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">

            {user? <><li><button className="btn red" onClick={()=>{
              auth.signOut();
              history.push("/login");
            }}>Logout</button></li> 
            {/* <li><button className="btn red" onClick={()=>{
              history.push("/contactus");
            }}>Contact Us</button></li> */}
            </>:
             <> <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li> <li><Link to="/contactall">Contact Us</Link></li></>}
  
          
             
           
           
            
          </ul>
        </div>
      </nav>
    )
}
