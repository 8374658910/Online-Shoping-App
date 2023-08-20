import React from "react";
import "./App.css";
import {useState} from "react";
import values from "./property.json";
import Pagination from "./Pagination";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel";


const App=({info,Addcard ,card,setCard})=>
{

  const [data,setData]=useState(info.slice(0,48));
  const [page,setPage]=useState(data.slice(0,16));
  const [show,setShow]=useState(false);
  const PageHandler=(page1)=>
  {
       setPage(data.slice((page1*16)-16,page1*16)); 
       
      
  }
  const Chnager=(item)=>
  {
    Addcard(item);
    setShow(true);
  }



 
  return(
    <div className="total" >

      <Carousel infiniteLoop autoPlay>
        <div>
          <img src="../images/karthik1.jpg" alt="text"/>
        </div>
        <div>
          <img src="../images/karthik2.jpg" alt="text"/>
        </div>
        <div>
          <img src="../images/karthik3.jpg" alt="text"/>
        </div>
        <div>
          <img src="../images/karthik4.jpg" alt="text"/>
        </div>

      </Carousel>
      
     
      <div className="main">
        
    {
      
      page.map((item)=>{
        return(
          <div className="box" key={item.id}>
          <div><img src={item.thumbnail} alt="text"/></div>
          <center>
          <h3>{item.title}</h3><br/>
          <h4>{item.category}</h4><br/>
          <h4><span>&#8377;1{item.price}</span></h4><br/>

          {
            card.includes(item)?(<button onClick={()=>setCard(card.filter((c)=>c.id!==item.id))} style={{"background-color":"red"}}>Order placed</button>):(<button
              onClick={()=>Addcard(item)}>Order Now</button>)
          }
           
              
              

            
         
          

          
          </center>
          </div>
        )
      })
    }
    <br/>
    </div>
    <br/>
    <Pagination data={data} PageHandler={PageHandler}/>

  
    
 
    </div>
  )
}
export default App;
