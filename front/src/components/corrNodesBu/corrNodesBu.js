import React, { useContext } from "react";
import { NameContext } from "../../App";

const CorrNodesBu = () => {
  const { corrNodes } = useContext(NameContext);
  let searchLinks = (algo) => {
    console.log(algo, "algo");
  };
  return (
    <>
      {Object.keys(corrNodes).length > 0 ? (
        <>
          {Object.keys(corrNodes).map((key, index) => {
            return (
              <>
                <button key={index} onClick={() => searchLinks(key)}>
                  {key}
                </button>
              </>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default CorrNodesBu;
