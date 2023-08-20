import React from "react";
import {useState} from "react";
import items from "./Mens.json";
import Pagination1 from "./Pagination1";
import "./Formals.css"
import { FcCheckmark } from "react-icons/fc";
const Formals=({info,setInfo,Addcard,card,setCard})=>
{
    const [dress,setDress]=useState(info.slice(40,56));
    const [data1,setData1]=useState(dress.slice(0,8));

    const [button,setButton]=useState(false)

    const pageChanger=(page)=>
    {
            setData1(items.slice((page*8)-8,page*8));
    }

    
 


        return(
            <div className="block">
                <div className="formal">
                
               {
                  data1.map(( item)=>{
                    return(
                        <div key={item.id} className="box1"  >
                        <img src={item.image} alt="text"/>
                        <h3>{item.title}</h3>
                        <h3>&#8377;{item.price}</h3>
                        <h2>{item.category}</h2><br/>
                        <h3>
                            {

                        card.includes(item)?(( <button onClick={()=>setCard(card.filter((c)=>c.id!==item.id))} style={{"background-color":"red"}}>Order Placed &nbsp;< FcCheckmark/></button>)):(
                            <button onClick={()=>Addcard(item)}>Order Now</button>
                        )
                  }
                        </h3>
                        
                        </div>
                    )
                    
                  })
               }
               
               </div>
               <Pagination1  dress={dress} pageChanger={pageChanger} />
            </div>
        )

   


  


}
export default Formals;