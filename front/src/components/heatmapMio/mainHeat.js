import React from "react";
import styled from "styled-components";
import SmallSquareCo from "../smallSquareCo/smallSquareCo";

const OuterCont = styled.div`
  display: flex;
  /* width: 60%; */
  width: fit-content;
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  //border: 2px solid yellowgreen;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
    //flex-basis: 70%;
  }
`;

const ContainerHeat = styled.div`
  width: 60vw;
  height: fit-content;
  //border: 2px solid red;
`;

const BigCont = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-auto-flow: row;
  //border: 2px solid black;

  /* grid-template-columns: 2fr, 8fr;
  grid-template-rows: 1fr; */
  /* background-color: yellowgreen; */
`;

const HeatMain = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numc}, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  background-color: rgb(215, 235, 200);
  //border: 2px solid purple;
`;

const HeatRowN = styled.div`
  display: grid;
  margin-right: 10px;
  margin-left: 10px;
  //margin-bottom: -5px;
  //border: 1px solid green;
  grid-template-columns: 1fr;
  width: fit-content;
`;

const HeatHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numc}, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  margin-bottom: 5px;
`;

const SmallSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;

  background-color: ${(props) => props.color};
`;

/* const SmallSquareC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
  color: #696666;
  background-color: ${(props) => props.color};
  position: relative;

  &:hover {
    &:after {
      content: " p-val: ${(props) => props.before}";
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
      color: white;
      position: absolute;
      inset: 0;
      transform: translate(-50%, -50%);
      width: fit-content;
      height: fit-content;
      z-index: 400;
      border: 1px solid green;
    }
  }
`; */

const MainHeat = ({ datam, names }) => {
  //console.log(datam, "dataaaWWWWW");

  let data = datam.map((vals) => {
    return vals.map((rt) => {
      return {
        pval: rt.forD.pval,
        overlap: rt.forD.overlap,
        id: rt.forD.id,
        intersect: rt.forD.intersect,
        list1: rt.forD.list1,
        list2: rt.forD.list2,
      };
    });
  });
  //console.log(data, "kkkRRRRRheat");

  let tg = data.map((arr) => arr.length);

  let dataIn = { columns: Math.max(...tg), rows: tg.length };

  let max = (data) =>
    Math.max.apply(
      Math,
      data.map(function (o) {
        return o.pval;
      })
    );

  let min = (data) =>
    Math.min.apply(
      Math,
      data.map(function (o) {
        return o.pval;
      })
    );

  let inr = data.map((arr) => {
    return { max: max(arr), min: min(arr) };
  });

  let vmax = Math.max.apply(
    Math,
    inr.map(function (o) {
      return o.max;
    })
  );

  let vmin = Math.min.apply(
    Math,
    inr.map(function (o) {
      return o.min;
    })
  );

  let maxmin = { max: vmax, min: vmin };

  let valueTransp = (x) => {
    if (x >= 0.1) {
      return 0;
    }
    if (x > 0.05 && x <= 0.1) {
      return 0.1;
    }
    if (x > 0.01 && x <= 0.05) {
      return 0.3;
    }
    if (x > 0.001 && x <= 0.01) {
      return 0.4;
    }
    if (x > 0 && x <= 0.001) {
      return 0.5;
    }
    if (x === 0) {
      return 1;
    }
  };

  /* console.log(dataIn, "jk"); */

  /*   let rows = ["unojjjjj", "uno", "uno", "uno", "dos"];
  let columns = ["uno", "uno", "uno", "dos", "tres"]; */

  /*   let handleClick = (e) => {
    console.log("this is working fine");
    e.preventDefault();
    e.target.style.border = "2px solid green";
    console.log(e.target);
  }; */

  return (
    <>
      {names.length > 0 ? (
        <OuterCont>
          <BigCont>
            <HeatRowN>
              <div
                style={{ width: "100%", height: "20vh", marginBottom: "10px" }}
              ></div>
              {names.map((row, index) => {
                return (
                  <SmallSquare
                    key={index}
                    style={{
                      display: "inline-flex",
                      justifyContent: "flex-end",
                      //border: "1px solid yellow",
                      marginTop: "5px",
                    }}
                  >
                    {row}
                  </SmallSquare>
                );
              })}
              <SmallSquare />
            </HeatRowN>
            <ContainerHeat>
              <div
                style={{ width: "100%", height: "20vh", marginBottom: "10px" }}
              >
                <HeatHeader
                  numc={dataIn.columns}
                  /*     style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }} */
                >
                  {names.map((column, index) => {
                    return (
                      <SmallSquare
                        key={index}
                        style={{
                          writingMode: "vertical-lr",
                          display: "inline-flex",
                          transform: "scale(-1) ",
                          /* transform:
                            "scale(-1) translateX(-50%) translateY(-5%) rotate(30deg)", */
                          //transform: "rotateY(30deg) rotate(-45deg)",
                          justifyContent: "flex-start",
                          paddingBottom: "1vh",
                          //border: "1px solid red",
                          height: "20vh",
                        }}
                      >
                        {column}
                      </SmallSquare>
                    );
                  })}
                </HeatHeader>
              </div>
              <HeatMain numc={dataIn.columns}>
                {data.map((elem) => {
                  return elem.map((elem, index) => {
                    /*   let col = `rgb(252, 27, 1, ${
                      1 -
                      (maxmin.max - elem.overlap) / (maxmin.max - maxmin.min)
                    })`; */
                    let col = `rgb(252, 27, 1, ${valueTransp(elem.pval)})`;

                    let vfRgt = {
                      v1max: maxmin.max,
                      v2pval: elem.pval,
                      v3min: maxmin.min,
                    };

                    //console.log(vfRgt, "objectCA");
                    return (
                      <SmallSquareCo col={col} elem={elem} key={index} />
                      /*                       <SmallSquareC
                        color={col}
                        before={elem.pval}
                        onClick={handleClick}
                        key={elem.id}
                      >
                        {elem.overlap}
                      </SmallSquareC> */
                    );
                  });
                })}
              </HeatMain>
              {/* <HeatHeader numc={dataIn.columns}>
                {names.map((column) => {
                  return (
                    <SmallSquare
                      style={{
                        writingMode: "vertical-lr",
                        display: "inline-flex",
                        transform: "scale(-1)",
                        justifyContent: "flex-end",
                        paddingBottom: "1vh",
                      }}
                    >
                      {column}
                    </SmallSquare>
                  );
                })}
              </HeatHeader> */}
            </ContainerHeat>
          </BigCont>
        </OuterCont>
      ) : null}
    </>
  );
};

export default MainHeat;
