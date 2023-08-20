import React from "react";
import App from "./App";
import Formals from "./Formals";
import Western from "./Western";
import HomeDecoration from "./HomeDecoration";
import {Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Count from "./Count";
import Info from "./Info.json";
import {useState} from "react";
import Card from "./Card";
const First=()=>
{
    const [info,setInfo]=useState(Info)
    const [card,setCard]=useState([]);
    const [search,setSearch]=useState();
    const Addcard=(data)=>
    {
          setCard([...card,data])
        
    }    
    
   
    return(
        <div>  

                  
                     
            <Navbar card={card} search={search} setSearch={setSearch }/>
            <Count/>
            <Routes>
                <Route path="/" element={<App info={info} setInfo={setInfo}  Addcard={Addcard}  setCard={setCard} card={card}/>}/>
                <Route path="/Formals" element={<Formals info={info} setInfo={setInfo} Addcard={Addcard} setCard={setCard} card={card}/> } />
                <Route path="/Western" element={<Western info={info} setInfo={setInfo} Addcard={Addcard} setCard={setCard} card={card} />}/>
                <Route path="/HomeDecoration" element={<HomeDecoration info={info} setInfo={setInfo} Addcard={Addcard} setCard={setCard} card={card}/>}/>
                 <Route path="/Card"  element={<Card card={card} setCard={setCard}/> }   />
            </Routes>

        </div>
    )
}
export default First;