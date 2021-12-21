import React, { useState } from "react";

const ColorButton = ({ autor, handleClickNodeFunction }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "5px",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{ marginRight: "10px", width: "100%" }}
          key={autor.id}
          onClick={() => [
            handleClickNodeFunction(autor),
            setIsActive(!isActive),
          ]}
        >
          {autor.label}
        </button>

        <div
          style={{
            //backgroundColor: autor.color,
            backgroundColor: isActive ? "orange" : "",
            width: "50px",
            height: "15",
            display: "flex",
            justifyContent: "flex-end",
          }}
        ></div>
      </div>
    </>
  );
};

export default ColorButton;
