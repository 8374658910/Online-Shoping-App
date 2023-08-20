
import {useState} from "react";
import "./HomeDecoration.css";
import Pagination2 from "./Pagination2";
const HomeDecoration=({info,Addcard,setCard,card})=>
{
   
    const [decode,setDecode]=useState(info.slice(64,100))
    const [data,setData]=useState(decode.slice(0,8))
    const pageChanger=(page)=>
    {
        setData(decode.slice((page*8)-8,page*8))
    }
    return(
        <div className="HomeDecoration">
            <div className="Home1">
            {
                data.map((item)=>{
                    return(
                        <div className="box3" key={item.id}>
                            <img src={item.thumbnail} alt="text"/>
                            <h4>{item.title}</h4>
                            <h3><span>&#8377;{item.price}</span></h3>
                            <h3>{item.category}</h3>
                            
                            
                          <h3> {
            card.includes(item)?(<button onClick={()=>setCard(card.filter((c)=>c.id!==item.id))} style={{"background-color":"red"}}>Order placed</button>):(<button
              onClick={()=>Addcard(item)}>Order Now</button>)
          }</h3>
            

                           
                            </div>
                    )
                })
            }
            </div>
            <Pagination2 decode={decode} pageChanger={pageChanger}/>
        </div>
    )
}
export default HomeDecoration;