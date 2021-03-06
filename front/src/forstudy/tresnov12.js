import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import { NameContext } from "../App";
import FileUpload from "../components/fileupload/FileUpload";
//import Upset from "../components/upset/upset";
//import Network from "../components/network/network";
//import GraphCyt from "../components/citoNetw/citoNet";
//import NApp from "../components/citoNetwDos/citoNetD";
import TresDGraph from "../components/tresDGraph/TresDGraph";
//import ListUploadComp from "../components/listUploadComponent/listUploadComp";

//import { BasicTable } from "../components/table/basicTable";

const ListSectionCont = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
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
  width: 20vw;
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
  @media (max-width: 768px) {
    width: 100%;
    //flex-basis: 70%;
  }
`;

const CloseX = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #bd0d19;
  }
`;

const ListUpMenu = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: rgb(165, 170, 160);
  flex-wrap: wrap;
  margin-bottom: 20px;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`;

const ListUpTitle = styled.div`
  width: 90%;
  font-size: 2rem;
  height: fit-content;
  margin-bottom: 20px;
  border-radius: 3px;
  margin-top: 8vh;
`;

const SmallAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  background-color: #3a7359;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  border: 0.0625rem solid transparent;
  margin-left: 10px;
  margin-bottom: 10px;
  color: white;
  &:hover {
    background-color: #bd0d19;
  }
`;

const FileUpCont = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainButton = styled.span`
  /*   margin-top: 1vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #ff0d1d;
  border: 0.0625rem solid transparent;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  min-height: 3rem;
  text-decoration-line: none;
  /* width: 10em; */
  text-align: center;
  &:hover {
    background-color: #bd0d19;
  }
`;

export const ReportsThreeStudy = () => {
  //const [authors, setAuthors] = useState([]);
  const {
    //initial,
    finlist,
    forNetworkFiltered,
    setDataToProviderClicked,
    consolidated,
    setDataToProviderForNetworkFiltered,
    setDataToProviderInterselect,
    setDataToProviderForNewNet,
    setDataToProviderScrollDir,
    scrollDir,
  } = useContext(NameContext);
  const [newData, setNewData] = useState([]);
  const [newInitialHold, setNewInitialHold] = useState([]);
  //const [dataForNet, setDataForNet] = useState([]);
  //const [locInitial, setlocInitial] = useState([]);
  //const [initialHold, setInitialHold] = useState([]);
  //console.log(finlist, "listaConsolidada");
  //console.log(consolidated, "CONSOLIDADADESDECONTEXT");
  /*   console.log(
    Object.keys(forNetworkFiltered).length,
    "Object.keys(forNetworkFiltered).length"
  ); */
  // const history = useHistory();

  /*   const routeChange = () => {
    let path = `/lists/lists2`;
    history.push(path);
  }; */

  /*  useEffect(() => {
    setlocInitial(initial);
  }, [initial]); */

  useEffect(() => {
    const threshold = 20;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setDataToProviderScrollDir(
        scrollY > lastScrollY ? "scrolling down" : "scrolling up"
      );
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    //console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir, setDataToProviderScrollDir]);

  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });

  /* const retrieved = async (ner) => {
    if (ner.length < 1) {
      console.log("busqueda vacia");
    }

    let responsed = await fetch(
      `https://string-db.org/api/json/network?identifiers=${ner}&species=3702`
    );
    let datad = await responsed.json();
    console.log(datad, "networkresponse");

    let nodes = datad
      .map((item) => [item.preferredName_A, item.preferredName_B])
      .flat(1)
      .filter((value, index, self) => self.indexOf(value) === index)
      .map((elem) => {
        return { id: elem };
      });

    console.log(nodes, "dert ");

    let links = datad.map((elem) => {
      return { source: elem.preferredName_A, target: elem.preferredName_B };
    });
    console.log(links, "forGr");

    const me = { nodes: nodes, links: links };
    console.log(me, "meeeee");
     setDataToProviderForNetworkFiltered(me);
  }; */

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.profileImages[0]);
    const res = await fetch("http://127.0.0.1:5000/lists", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    const response = res;
    //console.log(response, "respOnsubmit");
    setNewData(response);
    setNewInitialHold([]);
  };

  const toStringInPy = async (data) => {
    console.log(data, "toStringInPy");
    const res = await fetch("http://127.0.0.1:5000/stringdb", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    /* .then((res) => console.log(res)); */
    const response = res;
    //console.log(response, "respOnsubmitstringdb");
    let nodes = response
      .map((item) => [item.preferredName_A, item.preferredName_B])
      .flat(1)
      .filter((value, index, self) => self.indexOf(value) === index) // valores unicos
      .map((elem) => {
        return { data: { id: elem, label: elem, type: "ip" } };
      });

    console.log(nodes, "dert ");

    let edges = response.map((elem) => {
      return {
        data: { source: elem.preferredName_A, target: elem.preferredName_B },
      };
    });
    console.log(edges, "forGr");

    let namesDict = response.map((elem) => {
      var o = {};
      o[elem.preferredName_A] = elem.stringId_A
        .split(/[.]/)
        .slice(1, -1)
        .toString();
      return o;
    });

    console.log(namesDict, "NAMESDIC");

    const me = { nodes: nodes, edges: edges };
    console.log(me, "meeeee");
    setDataToProviderForNetworkFiltered(me);
  };

  const toStringInPyDos = async (data) => {
    //console.log(JSON.stringify(data), "DATAtoStringInPy");
    const res = await fetch("http://127.0.0.1:5000/stringdball", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    /* .then((res) => console.log(res)); */
    const response = res;
    console.log(response, "respOnALL");
    setDataToProviderForNewNet(response);

    //const me = { nodes: nodes, edges: edges };
    //console.log(me, "meeeee");
    //setDataToProviderForNetworkFiltered(me);
  };

  const onConsolidate = async (data) => {
    //console.log(data, "loqueseMandaEntres");
    const res = await fetch("http://127.0.0.1:5000/consolidate", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    /* .then((res) => console.log(res)); */
    const response = res;
    //console.log(response, "objectLoquerecibeEntres");
    let averfilter = response.filter((obj) => finlist.includes(obj.genes));
    //console.log(averfilter, "FiltradoobjectLoquerecibeEntres");

    /// adicionar lo de la lista consolidada

    const filterByReference = (arr1, arr2) => {
      /*      let res = [];
      res = arr1.filter((el) => {
        return arr2.find((element) => {
          return element.genes === el.genes;
        });
      }); */
      let merged = [];

      for (let i = 0; i < arr2.length; i++) {
        let tempOb = arr1.find((itmInner) => itmInner.genes === arr2[i].genes);

        merged.push({
          //lista1: { gestf: arr2[i].genes, nautor: arr2[i].author },
          //lista2: arr1.find((itmInner) => itmInner.genes === arr2[i].genes),
          ...tempOb,
          authQuery: arr2[i].author,
        });
      }
      return merged;
    };

    let frt = filterByReference(consolidated, averfilter);
    //console.log(frt, "NuevoAverQQ");

    //setDataToProviderForNetworkFiltered(averfilter);
    /// filtrado para fetc en python

    //let filteredArrNetForPyt = averfilter.map((value) => value.genes);
    toStringInPy(frt);
    toStringInPyDos(frt);
    //let filteredArrNet = averfilter.map((value) => value.genes).join("%0d");
    //let newFil = filteredArrNet.join("%0d");

    //retrieved(filteredArrNet); // aqui se manda a string
    //setDataToProviderForNetworkFiltered(filteredArrNet);
    //console.log(filteredArrNet, "DECONSOLIDADORESPUESTA");
    //setDataToProviderConsolidated(response);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newUserInfo);
    setDataToProviderClicked(true);
    //logic to create new user...
  };

  /* const listOut = (val) => {
    let dss = locInitial.filter((elem) => {
      return elem.author !== val;
    });

    let dssu = locInitial.filter((elem) => {
      return elem.author === val;
    });
    setlocInitial(dss);
    setInitialHold(initialHold.concat(dssu));
  };

  const listIn = (val) => {
    let dss = initialHold.filter((elem) => {
      return elem.author !== val;
    });
    let dssu = initialHold.filter((elem) => {
      return elem.author === val;
    });
    setlocInitial(locInitial.concat(dssu));
    setInitialHold(dss);
  };
 */
  const newlistOut = (val) => {
    let dss = newData.filter((elem) => {
      return elem.author !== val;
    });

    let dssu = newData.filter((elem) => {
      return elem.author === val;
    });
    setNewData(dss);
    setNewInitialHold(newInitialHold.concat(dssu));
  };

  const newlistIn = (val) => {
    let dss = newInitialHold.filter((elem) => {
      return elem.author !== val;
    });
    let dssu = newInitialHold.filter((elem) => {
      return elem.author === val;
    });
    setNewData(newData.concat(dssu));
    setNewInitialHold(dss);
  };

  /* aqui modificar */
  const consolidateLists = () => {
    //console.log(locInitial, "locInitiallocInitial");
    //const carray = locInitial.concat(newData);

    const carray = newData;

    const dede = carray.map((elem) => {
      return elem.author;
    });

    const unuq = dede.filter((x, i, a) => a.indexOf(x) === i);

    if (dede.length === unuq.length) {
      onConsolidate(carray);

      //routeChange();
      setDataToProviderInterselect([]);
    }
  };

  return (
    <>
      {/* <ListUploadComp /> */}
      <ListSectionCont style={{ minHeight: "70vh" }}>
        <ListUpTitle />
        <ListUpTitle>Lists for networkA</ListUpTitle>
        {/* <ListUpTitle />
          <ListUpTitle>Expresion list</ListUpTitle> */}
        {/* aqui */}
        <div
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "space-between",
          }}
        >
          <ListSection style={{ width: "44vw" }}>
            {newData.length > 0 ? (
              <>
                <ListUpMenu>
                  {newInitialHold.map((elem) => {
                    return (
                      <SmallAuth
                        key={elem.id}
                        onClick={() => newlistIn(elem.author)}
                      >
                        {elem.author}
                      </SmallAuth>
                    );
                  })}
                </ListUpMenu>
                {/*   <h1>Reports/reports1</h1> */}
                {newData.map((aut) => {
                  return (
                    <CardCont key={aut.id}>
                      <div>
                        <span>List source: </span>
                        {aut.author}
                      </div>
                      <div>
                        <span>AGI Number: </span>
                        {aut.genes.length}
                      </div>
                      <div>
                        <span>Pubmed: </span>
                        Link
                      </div>

                      <CloseX onClick={() => newlistOut(aut.author)}>
                        <AiIcons.AiOutlineClose />
                      </CloseX>
                    </CardCont>
                  );
                })}
              </>
            ) : null}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <FileUpCont>
                <div>
                  <ListUpTitle style={{ fontSize: "1rem" }}>
                    Upload lists for network
                  </ListUpTitle>
                  <form>
                    <FileUpload
                      accept=".csv"
                      label=""
                      show={newData.length}
                      funct={handleSubmit}
                      /* multiple */
                      updateFilesCb={updateUploadedFiles}
                    />
                  </form>
                </div>
              </FileUpCont>
            </div>
          </ListSection>
          {/* <div>parte otra</div> */}
          <ListSection style={{ width: "44vw" }}>
            {newData.length > 0 ? (
              <>
                <ListUpMenu>
                  {newInitialHold.map((elem) => {
                    return (
                      <SmallAuth
                        key={elem.id}
                        onClick={() => newlistIn(elem.author)}
                      >
                        {elem.author}
                      </SmallAuth>
                    );
                  })}
                </ListUpMenu>
                {/*   <h1>Reports/reports1</h1> */}
                {newData.map((aut) => {
                  return (
                    <CardCont key={aut.id}>
                      <div>
                        <span>List source: </span>
                        {aut.author}
                      </div>
                      <div>
                        <span>AGI Number: </span>
                        {aut.genes.length}
                      </div>
                      <div>
                        <span>Pubmed: </span>
                        Link
                      </div>

                      <CloseX onClick={() => newlistOut(aut.author)}>
                        <AiIcons.AiOutlineClose />
                      </CloseX>
                    </CardCont>
                  );
                })}
              </>
            ) : null}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <FileUpCont>
                <div>
                  <ListUpTitle style={{ fontSize: "1rem" }}>
                    Upload a expresion list
                  </ListUpTitle>
                  <form>
                    <FileUpload
                      accept=".csv"
                      label=""
                      show={newData.length}
                      funct={handleSubmit}
                      /* multiple */
                      updateFilesCb={updateUploadedFiles}
                    />
                  </form>
                </div>
              </FileUpCont>
            </div>
          </ListSection>
        </div>
      </ListSectionCont>
      <ListSectionCont>
        <ListUpTitle>Consolidate lists</ListUpTitle>
        <ListSection style={{ justifyContent: "center" }}>
          <MainButton onClick={consolidateLists}>
            <span style={{ marginLeft: "10px", marginRight: "10px" }}>
              ConsolidateR
            </span>
          </MainButton>
        </ListSection>
        <ListUpTitle />
      </ListSectionCont>

      <TresDGraph />

      {/* <div style={{ width: "100%", height: "100px" }}></div> */}

      {/*  <Upset /> */}

      {/* <BasicTable /> */}
      {/* <Network /> */}
      {/* <GraphCyt /> */}
      {/* <NApp /> cytoscape */}
    </>
  );
};
