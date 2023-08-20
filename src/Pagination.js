import "./Pagination.css"
const Pagiantion=({data ,PageHandler})=>
{
    let pageNumber=[];
    for(let i=1;i<(Math.ceil(data.length/16)+1);i++)
    {
        pageNumber.push(i)
    }
    console.log(data.length)
    return(
        <center>
        <div  className="page">
           
           {
            pageNumber.map((page1)=>{
                return(
                    <div className="pagenumber"  key={page1.id} onClick={()=>PageHandler(page1)}>
                        {page1}
                    </div>
                )

            })
           }
          
       </div>
       </center>
    )
}
export default Pagiantion;