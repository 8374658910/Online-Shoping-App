import "./Pagination1.css"
const Pagination1=({dress ,pageChanger})=>
{

    let lab1=[];
    for(let i=1;i<(Math.ceil(dress.length/8)+1);i++)
    {
        lab1.push(i);
    }
    return(
        <div className="pagep">
            <center className="centere">
              {
                lab1.map((page)=>{
                    return(
                        <div className="pagenumber1" onClick={()=>pageChanger(page)}>{page}</div>
                    )
                })
              }
              </center>
        </div>
    )
}
export default Pagination1;