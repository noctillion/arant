import React from "react";
import styled from "styled-components";

const CellRow = styled.div`
  border: 1px solid black;
`;

const RowCols = ({ res, ids }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {res.map((obj) => (
          <CellRow key={obj.id}>{obj[ids]}</CellRow>
        ))}
      </div>
    </>
  );
};

export default RowCols;
