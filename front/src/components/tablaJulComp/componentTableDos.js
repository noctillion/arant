import React, { useState } from "react";
import styled from "styled-components";

const names = { a: "Gene", b: "AGI", c: "g", d: "yy", e: "vg" };
/* const nDataT = [
  { a: "ATG24578", b: "LOX2", c: 0.23, d: 0.44, e: 0.85 },
  { a: "ATG24578", b: "LOX2", c: 0.23, d: 0.44, e: 0.85 },
  { a: "ATG24578", b: "LOX2", c: 0.24, d: 0.44, e: 0.85 },
  { a: "ATG24578", b: "LOX2", c: 0.29, d: 0.44, e: 0.85 },
  { a: "ATG24578", b: "LOX2", c: 0.23, d: 0.44, e: 0.85 },
  { a: "ATG24578", b: "WRKY67", c: 0.23, d: 0.44, e: 0.85 },
  { a: "ATG24578", b: "LOX2", c: 0.28, d: 0.44, e: 0.85 },
]; */

let TableDiv = styled.div`
  width: 40vw;
  height: 5vh;
  background-color: rgb(237, 238, 236);
  //display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr 1fr;
  display: inline-grid;
  border: 1px solid white;
  grid-auto-flow: column;
  @media (max-width: 768px) {
    width: 100%;
    /* justify-content: center; */
  }
  @media (max-width: 1024px) {
    width: 100%;
    /* justify-content: center; */
  }
`;

let CellDivHead = styled.div`
  display: flex;
  width: 100%;
  //font-weight: bold;
  font-size: 1.2rem;
  font-family: "Maven Pro", sans-serif;
  align-items: center;
  background-color: #3a7359;
  justify-content: center;
  color: white;
  //border: 1px solid red;
  //padding-left: 15px;
`;

let CellDiv = styled.div`
  display: flex;
  width: 100%;
  font-size: 1rem;
  //font-family: "Maven Pro", sans-serif;
  font-family: "Lato", sans-serif;
  align-items: center;
  justify-content: center;
  background-color: rgb(165, 170, 160);
  //border: 1px solid red;
  //padding-left: 15px;
`;

let TableCont = styled.div`
  border: 1px solid white;
  width: fit-content;
  background-color: green;
`;

const ComponentTableDos = ({ nData, names }) => {
  /* const [nData, setnData] = useState(nDataT); */
  const rowCount = Object.keys(nData[0]).length;
  // TableDiv["grid-template-colums"] = `repeat(${rowCount}, 1fr)`;
  return (
    <TableCont>
      <TableDiv rowCount={rowCount}>
        {Object.keys(names).map((key, index) => {
          return <CellDivHead key={index}>{names[key]}</CellDivHead>;
        })}
        {/* <div>aqui</div> */}
      </TableDiv>

      {nData.slice(0, 5).map((item, index) => {
        return (
          <div key={index}>
            {/* <TableDiv rowCount={rowCount}>
              {Object.keys(item).map((key) => {
                console.log(key, "item[key]");
                return <CellDiv>{item[key]}</CellDiv>;
              })}
              
            </TableDiv> */}

            <TableDiv rowCount={rowCount}>
              <CellDiv>{item.genes}</CellDiv>
              <CellDiv>{item.name2}</CellDiv>
              <CellDiv>{item.bce1.toFixed(2)}</CellDiv>
              <CellDiv>{item.bet_c3.toFixed(2)}</CellDiv>
              <CellDiv>{item.c_c2.toFixed(2)}</CellDiv>
              <CellDiv>{item.ei_c5.toFixed(2)}</CellDiv>

              {/*  <button>aqui</button> */}
            </TableDiv>
          </div>
        );
      })}
    </TableCont>
  );
};

export default ComponentTableDos;
