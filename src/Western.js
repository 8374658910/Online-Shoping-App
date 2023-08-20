import {useState} from "react";

import "./Western.css";

const Western=({info,Addcard ,card,setCard})=>
{
 
    
    const [clothe,setClothe]=useState(info.slice(56,64))

  
    
 
       
    
   
    return(
         <div className="western">
        <div  className="west">
        {
            clothe.map((items)=>{
                return(
                    <div key={items.id} className="box2">
                        <img src={items.thumbnail} alt="text"/><br/><br/>
                        <h4>{items.description}</h4>
                        <h3><span>&#8377;{items.price}</span></h3>
                        <h3>{items.brand}</h3>
                        <h3> {
            card.includes(items)?(<button onClick={()=>setCard(card.filter((c)=>c.id!==items.id))} style={{"background-color":"red"}}>Order placed</button>):(<button
              onClick={()=>Addcard(items)}>Order Now</button>)
          }</h3>
                    </div>
                )
            })
        }
        
        </div>
        </div>
       
    )
}
export default Western;