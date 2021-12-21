import React from "react";
import styled from "styled-components";
import RowTable from "../newTableJul/rowTable";
import ComponentTableDos from "../tablaJulComp/componentTableDos";

const ListSectionCont = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  font-family: "Maven Pro", sans-serif;
  flex-direction: column;
  background-color: rgb(232, 234, 238);
  font-size: 3rem;
  justify-content: center;
  align-items: center;
`;

const ListSection = styled.div`
  width: 90%;
  height: fit-content;
  border: 1px solid green;
  background-color: rgb(215, 235, 200);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 3px;

  @media (max-width: 768px) {
    flex-direction: column;

    //width: 100%;
  }
`;

const CardCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 28vw;
  min-width: fit-content;
  height: fit-content;
  border: 1px solid black;
  font-size: 1.2rem;
  margin-bottom: 10px;
  background-color: #e5ce9c;
  padding: 5px;
  padding-right: 20px;
  margin-right: 10px;
  border-radius: 3px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    //background-color: white;
    //flex-basis: 70%;
    justify-content: center;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`;

const ListUpTitle = styled.div`
  width: 90%;
  font-size: 2rem;
  height: fit-content;
  margin-bottom: 20px;
  border-radius: 3px;
  margin-top: 2vh;
`;

const TableTot = styled.div`
  width: 100%;
  border: 1px solid black;
`;

const Results = ({ resultsGeneral }) => {
  let tableSchema = [
    { name: "Gene", mapper: "genes", id: 1 },
    { name: "AGI", mapper: "name2", id: 2 },
    { name: "BCA", mapper: "bce1", id: 3 },
    { name: "ATT", mapper: "bet_c3", id: 4 },
    { name: "CC", mapper: "c_c2", id: 5 },
    { name: "FF", mapper: "ei_c5", id: 6 },
    { name: "groupQuery", mapper: "groupQuery", id: 7 },
  ];

  const tableSchemaDos = {
    genes: "Gene",
    name2: "AGI",
    bce1: "BCA",
    bet_c3: "ATT",
    c_c2: "CC",
    ei_c5: "FF",
  };

  // const r = array.filter((elem) => !anotherArray.find(({ id }) => elem.id === id) && elem.sub);
  //result = people.filter((o) => id_filter.includes(+o.id) && o.gender == "m");

  /*  let tableTot = resultsGeneral.map((element, index) => {
    return element.filter((elem) =>
      tableSchema.find((obj) => obj.mapper === Object.values(elem))
    );
  }); */

  let filterOb = (objQ, arrQ) => {
    const filtered = Object.keys(objQ)
      .filter((key) => arrQ.includes(key))
      .reduce((obj, key) => {
        obj[key] = objQ[key];
        return obj;
      }, {});
    return filtered;
  };

  let scje = tableSchema.map((elem) => elem.mapper);

  /* let aver = resultsGeneral[0].map((anim) => filterOb(anim, scje));
  console.log(aver); */

  let filteredCard = resultsGeneral.map((element, index) => {
    //console.log(element, "eleeeement");
    return element.map((elem) => filterOb(elem, scje));
  });

  //console.log(filteredCard);

  //let hji = pick(scje)(resultsGeneral[0][0]);
  //console.log(hji);
  ///result = people.filter((o) => id_filter.includes(+o.id) && o.gender == "m");

  return (
    <ListSectionCont>
      <div style={{ height: "10vh" }}></div>
      <ListUpTitle>Network Centrality Measures by Group</ListUpTitle>
      <ListSection>
        {filteredCard.slice(0, 5).map((result, index) => {
          //console.log(result, "ressssssss");
          return (
            <CardCont key={index}>
              <h3>Group: {result[0].groupQuery}</h3>
              <p>Nodes: {result.length}</p>
              <button onClick={() => alert(/* result, */ "ddtt")}>
                expand
              </button>
              <br />
              <ComponentTableDos nData={result} names={tableSchemaDos} />
              {/*  <TableTot>
                <RowTable cols={tableSchema} res={result} />
              </TableTot> */}
            </CardCont>
          );
        })}
      </ListSection>
    </ListSectionCont>
  );
};

export default Results;
