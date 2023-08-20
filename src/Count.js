import {useEffect ,useState} from 'react';
import "./Count.css";
const Count=()=>
{
    const [time,setTime]=useState(3*24*60*60*1000)

    useEffect(()=>{
       setTimeout(()=>
       {
          setTime(time-1000)
       },1000)
    },[time])


    const getTime=(Milliseconds)=>
    {
         let Seconds=parseInt(Math.floor(Milliseconds/1000));
         let Minutes=parseInt(Math.floor(Seconds/60));
         let Hours=parseInt(Math.floor(Minutes/60));
         let Days=parseInt(Math.floor(Hours/24));

         let seconds=parseInt(Math.floor(Seconds%60));
         let minutes=parseInt(Math.floor(Minutes%60));
         let hours=parseInt(Math.floor(Hours%24))

         return ` ${Days}:${hours}:${minutes}:${seconds}`
    }




    return(
        <div className='count'>
            <h1>Offers close Soon: <span>{getTime(time)}</span>
            </h1>
          
        </div>
    )
}
export default Count;