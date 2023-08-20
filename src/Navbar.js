import "./Navbar.css";
import {NavLink  } from "react-router-dom";
import {useState} from "react"
import {BsFillCartFill} from "react-icons/bs"
const Navbar=({card ,search,setSearch})=>
{
  


  


    return(



        <div className="nav">
            <div className="left">
                <h1>Lookie</h1>
            </div>
            <div className="right">
                
                   <NavLink to="/"> <h3>Home</h3></NavLink>
                   <NavLink to="/Formals"><h3>Formals</h3></NavLink> 
                    <NavLink to="/Western"><h3>Western</h3></NavLink>
                   <NavLink to="/HomeDecoration"><h3>Home-Decoration</h3></NavLink>
                   
                   
                  
             <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
             <img src="./images/glass.png" alt="text"/>
            
             <NavLink to="/Card"> <BsFillCartFill   style={{"color":"whitesmoke","fontSize":"24px"}}/>
                   <sup className="card-span">{card.length}</sup>
                    </NavLink>
             
             <img src="./images/nani2.png" alt="text"/>
              
            
            </div>
        </div>
    
    )
}
export default Navbar;