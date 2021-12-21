import React from 'react'
import "./style.tablecom.css"

function TableCompEncabezado({header, widthy, headLength}) {


  return (
    <>
  


<div className="encabezado">
{/* <div className="css-flex-table-header"> */}
  {/* {header.map(element=>{return <div className="O_column" style={{width:`${widthy*1.3}vh`}} >{element}</div>})} */}
  {headLength.map(element=>{ return (
       element.length > 8 ?  <div className="O_column" style={{width:`${element.length * 0.7}vw`}} /* style={{width:"auto"}} */ ><div className="cell" >{element.cell}</div></div>:

       <div className="O_column" style={{width:`${element.length}vw`}} /* style={{width:"auto"}} */ ><div className="cell" >{element.cell}</div></div>

  )

    })}
</div >

      
    </>

  )
}

/* style={{width:`${widthy*1.2}vh`}} */
export default TableCompEncabezado
