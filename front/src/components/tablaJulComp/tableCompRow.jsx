import React from 'react'
import "./style.tablecom.css"

function TableCompRow({rowcontent, widthy, headLength}) {
  console.log(rowcontent,'rowcontent');
  console.log('headLengthheadLength',headLength);
  return (
    <>
    <div className="cuerpo">
  {/* {rowcontent.map(element=> <div className="O_column" style={{width:`${widthy*1.3}vh`}}>{element}</div> )} */}

{/*   {rowcontent.map(element=> <div className="O_column" style={{width:`${headLength.length+1.3}vh`}}>{<div className="cell" >{element}</div>}</div> )} */}




{rowcontent.map((element, index)=> <div className="O_column">{
  
  headLength[index].length > 8 ? 
  
  
  <div className="cell" style={{width:`${headLength[index].length * 0.7}vw`}} >{element}</div> : <div className="cell" style={{width:`${headLength[index].length}vw`}} >{element}</div> }</div> )}





</div>
      
    </>
  )
}

/* style={{width:`${widthy*1.2}vh`}} */

export default TableCompRow
