import React, { useState, useContext } from "react";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import { NameContext } from "../../App";
import FileUpload from "../fileupload/FileUpload";
// no sirve hay que arreglarlo

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

const ListUploadComp = () => {
  const { setDataToProviderClicked } = useContext(NameContext);
  const [newUserInfo, setNewUserInfo] = useState([]);
  const [newData, setNewData] = useState([]);
  const [newInitialHold, setNewInitialHold] = useState([]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newUserInfo);
    setDataToProviderClicked(true);
  };

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

  return (
    <div>
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
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <FileUpCont>
            <div>
              <ListUpTitle style={{ fontSize: "1rem" }}>
                Upload a expression matrix
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
  );
};

export default ListUploadComp;
