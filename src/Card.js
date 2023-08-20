import "./Card.css"
import {useState,useEffect} from "react";
import {FcOk } from "react-icons/fc"
const Card=({card,setCard})=>
{
    const [price,setPrice]=useState(0);


    useEffect(()=>
    {
        setPrice(card.reduce((acc,curr)=>acc+curr.price,0))
    },[card])
    return(
        <div > <center>
            <h1>My Card</h1>
            </center>
            <h1>Amount to pay:{price}</h1>
        
        <div className="main1">
{
    card.map((item)=>
    {
        return(
            <div className="boxie" key={item.id}>
            <div><img src={item.thumbnail} alt="text"/></div>
            <center>
            <h3>{item.title}</h3><br/>
            <h4>{item.category}</h4>
            <h4><span>&#8377;{item.price} &nbsp;< FcOk/></span></h4>
            <button onClick={()=>setCard(card.filter((c)=>c.id!==item.id)              )}>
            Remove Order</button>
            </center>
             </div>

        )
    })
}
        </div>
        
        </div>
    )
}
export default Card;