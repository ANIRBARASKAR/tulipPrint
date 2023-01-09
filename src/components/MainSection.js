import React, { useState, useEffect } from "react";
import Canvas from "../modules/Canvas";
import SideBar from "../modules/SideBar";
import "./../assets/css/style.css";
import { Container, Row } from "react-bootstrap";
// import Test from "../pages/Test";

const MainSection = () => {
  const [basic, setbasic] = useState();
  const [halfDrop, sethalfDrop] = useState();
  const [halfBrick, sethalfBrick] = useState();
  const [center, setcenter] = useState();
  const [mirror, setmirror] = useState();
  const [designSize1, setdesignSize1] = useState(5);
  const [rotation, setrotation] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [handleRotation, sethandleRotation] = useState(false);
  const [handleUpload, sethandleUpload] = useState(false);

  useEffect(() => {
    console.log("rotation from Main ", rotation);
    console.log("handleRotation from Main ", handleRotation);
    // setbasic(true)
  }, [rotation, inputValue, handleRotation, sethandleUpload]);

  return (
    <>
      <Container className="main_Section">
        <Row style={{ display: "flex" }}>
          <Canvas
            basic={basic}
            halfDrop={halfDrop}
            halfBrick={halfBrick}
            center={center}
            mirror={mirror}
            setbasic={setbasic}
            sethalfDrop={sethalfDrop}
            sethalfBrick={sethalfBrick}
            setcenter={setcenter}
            setmirror={setmirror}
            designSize1={designSize1}
            rotation={rotation}
            inputValue={inputValue}
            handleRotation={handleRotation}
            handleUpload={handleUpload}
          />
          <SideBar
            inputValue={inputValue}
            setinputValue={setinputValue}
            setbasic={setbasic}
            sethalfDrop={sethalfDrop}
            sethalfBrick={sethalfBrick}
            setcenter={setcenter}
            setmirror={setmirror}
            setdesignSize1={setdesignSize1}
            setrotation={setrotation}
            sethandleRotation={sethandleRotation}
            sethandleUpload={sethandleUpload}
          />


        </Row>

        <br />
        {/* <Test inputValue={inputValue}/> */}
      </Container>
    </>
  );
};

export default MainSection;
