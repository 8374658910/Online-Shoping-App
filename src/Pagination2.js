import "./Pagination2.css"
const Pagination2=({decode,pageChanger})=>
{
    const lab=[]
    for(let i=1;i<(Math.ceil(decode.length/8)+1);i++)
    {
        lab.push(i);
    }
    return(
        <div className="page4">
            <center className="vertical" >
             {
                lab.map((page)=>{
                    return(
                        <div className="pagebox" onClick={()=>pageChanger(page)}>
                            {page}
                        </div>
                    )
                })
             }
             </center>
        </div>
    )
}
export default Pagination2;