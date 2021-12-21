import React from "react";
import styled from "styled-components";
import RowCols from "./rowCols";

const CellRow = styled.div`
  border: 1px solid black;
`;

const celCol = styled.div`
  border: 1px solid black;
`;

const RowTableFirst = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: italic;
`;
const RowTable = ({ cols, res }) => {
  console.log(res, "res");
  return (
    <>
      <RowTableFirst>
        {cols.map((col) => (
          <CellRow key={col.id}>{col.name}</CellRow>
        ))}
      </RowTableFirst>
      <RowTableFirst>
        {cols.map((col) => (
          <RowCols key={col.id} ids={col.mapper} res={res} />
        ))}
        {/*  <RowCols res={res} ids={"genes"} />
        <RowCols res={res} ids={"name2"} /> */}
      </RowTableFirst>
    </>
  );
};

export default RowTable;
