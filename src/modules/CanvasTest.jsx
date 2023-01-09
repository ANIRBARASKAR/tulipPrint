// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Col,
//   Container,
//   Dropdown,
//   Form,
//   Modal,
//   Nav,
//   Row,
//   Tab,
//   Tabs,
// } from "react-bootstrap";
// import rotate from "../assets/images/rotate.png";
// import CanvasTest from "./CanvasTest";
// import arrow from "../assets/images/arrow.png";
// import upload from "../assets/images/upload.png";
// import touchscreen from "../assets/images/touchscreen.png";
// import cart from "../assets/images/cart.png";

// export default function SideBar(props) {
//   const [show, setShow] = useState(false);

//   const [isShown, setIsShown] = useState(false);

//   const handleClick = (event) => {
//     // 👇️ toggle shown state
//     setIsShown((current) => !current);

//     // 👇️ or simply set it to true
//     // setIsShown(true);
//   };

//   const [isActive, setIsActive] = useState(false);

//   const handleClick1 = () => {
//     // 👇️ toggle
//     setIsActive((current) => !current);

//     // 👇️ or set to true
//     // setIsActive(true);
//   };

//   const [isActiveNew, setIsActiveNew] = useState(false);
//   const handleClick2 = () => {
//     // 👇️ toggle
//     setIsActiveNew((current) => !current);

//     // 👇️ or set to true
//     // setIsActive(true);
//   };
//   const {
//     setbasic,
//     sethalfDrop,
//     sethalfBrick,
//     setcenter,
//     setmirror,
//     inputValue,
//     setdesignSize1,
//     setrotation,
//     setinputValue,
//     sethandleRotation,
//     sethandleUpload,
//   } = props;

//   const [designSize, setdesignSize] = useState(5);

//   console.log("designSize", designSize);
//   setdesignSize1(designSize);

//   // ***************** handle Design size

//   const handleDesignSize = (arg) => {
//     console.log("handleDesignSize Called");
//     switch (arg) {
//       case 5:
//         return setdesignSize(arg);
//       case 10:
//         return setdesignSize(arg);
//       case 15:
//         return setdesignSize(arg);
//       case 20:
//         return setdesignSize(arg);
//       default:
//         return console.log(" designSize doesn't match");
//     }
//   };

//   // ********** handleInputValue

//   const handleInputValue = (e) => {
//     console.log("handleInputValue called");
//     setinputValue(URL.createObjectURL(e.target.files[0]));
//     sethandleUpload(true);
//   };
//   console.log("inputValue", inputValue);

//   useEffect(() => {
//     console.log("designSize from sidebar.jsx", designSize);
//   }, [designSize]);

//   return (
//     <>
//       <Col xs={12} md={4} className="mainRightSection">
//         <div>
//           <h4>Product Name</h4>
//           {/* <h2>Add Image:</h2>
//                     <input type="file" className="btnFinalUp" onChange={handleChange} /> */}

//           <div className="selectuploade_sec">
//             <div className="col-sm-6" style={{ padding: 0 }}>
//               <label for="file-upload" class="custom-file-upload">
//                 <img src={upload} alt="" />
//                 <span> Upload Design</span>
//               </label>
//               <input
//                 id="file-upload"
//                 type="file"
//                 className="upload_sec"
//                 onChange={handleInputValue}
//               />
//             </div>
//             <div
//               className="select_btn col-sm-6"
//               style={{ padding: "0px 0 0 10px" }}
//             >
//               <Button href="#">
//                 <img src={touchscreen} alt="" />
//                 <span> Select Design</span>{" "}
//               </Button>
//             </div>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <span>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               Aspernatur quibusdam
//             </span>
//             <img src={inputValue} className="prieveiwImg_sec" />
//           </div>
//           <div className="designSize_Main Sec">
//             <h4 className="designSize_textValue">Design Size</h4>
//             <div className="sizeDesign_option">
//               <input
//                 type="button"
//                 value="05 cm"
//                 onClick={() => handleDesignSize(5)}
//               />
//               <input
//                 type="button"
//                 value="10 cm"
//                 onClick={() => handleDesignSize(10)}
//               />
//               <input
//                 type="button"
//                 value="15 cm"
//                 onClick={() => handleDesignSize(15)}
//               />
//               <input
//                 type="button"
//                 value="20 cm"
//                 onClick={() => handleDesignSize(20)}
//               />
//               {/* previous code @ */}
//               {/* <input type="text" value='20 cm' onClick={() => handleDesignSize(20)} disabled /> */}
//             </div>
//           </div>

//           <div className="Pattern_MainSec">
//             <h4 className="designSize_text">Arrangment</h4>

//             <Tab.Container id="left-tabs-example" defaultActiveKey="">
//               <Row>
//                 <Col sm={12}>
//                   <Nav
//                     variant="pills"
//                     className="flex-row"
//                     style={{ columnGap: 10 }}
//                   >
//                     <Nav.Item>
//                       <Nav.Link
//                         eventKey="first"
//                         className="rotate_newText"
//                         // onClick={handleClick2}
//                         style={{
//                           backgroundColor: isActiveNew ? "#d1c3c329" : "",
//                         }}
//                       >
//                         <img
//                           style={{
//                             width: 23,
//                             marginRight: 5,
//                           }}
//                           src={rotate}
//                         />
//                         Rotate Pattern
//                       </Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link
//                         eventKey="second"
//                         // style={{
//                         //     backgroundColor: isActive ? '#d1c3c329' : '',

//                         //     borderRadius: isActive ? '10px 10px 0px 0px' : '',
//                         //     padding: isActive ? 11 : '',
//                         //     margin: isActive ? 0 : '',
//                         //     border: isActive ? 0 : '',
//                         //     boxShadow: isActive ? '0 0px 0px 0 rgb(34 34 34 / 15%)' : '',
//                         // }}
//                         // onClick={handleClick}
//                         onClick={() => {
//                           handleClick();
//                           handleClick1();
//                         }}
//                       >
//                         Pattern Type
//                         <img
//                           style={{
//                             width: 15,
//                             marginLeft: 5,
//                             height: 15,
//                           }}
//                           src={arrow}
//                         />
//                       </Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                 </Col>
//                 <Col sm={12}>
//                   <Tab.Content>
//                     <Tab.Pane eventKey="first"></Tab.Pane>
//                     <Tab.Pane eventKey="second">
//                       {/* 👇️ show elements on click */}
//                       {isShown && (
//                         <ul className="PatternType_outer">
//                           <li class="" onClick={(e) => setbasic(true)}>
//                             <a href="#" rel="fg_img_repeat" layout="tile">
//                               <img
//                                 src="https://www.texindiamart.com/fabric-generator/layout_repeat.png"
//                                 alt=""
//                                 style={{ border: "1px solid black" }}
//                               />
//                             </a>
//                             <h6>Basic</h6>
//                           </li>

//                           <li class="" onClick={(e) => sethalfDrop(true)}>
//                             <a href="#" rel="fg_img_repeat" layout="tile">
//                               <img
//                                 src="https://www.texindiamart.com/fabric-generator/layout_vert.png"
//                                 alt=""
//                               />
//                             </a>
//                             <h6>Half-drop</h6>
//                           </li>
//                           <li class="" onClick={(e) => sethalfBrick(true)}>
//                             <a href="#" rel="fg_img_repeat" layout="tile">
//                               <img
//                                 src="https://www.texindiamart.com/fabric-generator/layout_brick.png"
//                                 alt=""
//                               />
//                             </a>
//                             <h6>Half-brick</h6>
//                           </li>
//                           <li class="" onClick={(e) => setcenter(true)}>
//                             <a href="#" rel="fg_img_repeat" layout="tile">
//                               <img
//                                 src="https://www.texindiamart.com/fabric-generator/layout_center.png"
//                                 alt=""
//                               />
//                             </a>
//                             <h6>Center</h6>
//                           </li>
//                           <li class="" onClick={(e) => setmirror(true)}>
//                             <a href="#" rel="fg_img_repeat" layout="tile">
//                               <img
//                                 src="https://www.texindiamart.com/fabric-generator/layout_repeat.png"
//                                 alt=""
//                               />
//                             </a>
//                             <h6>Mirror</h6>
//                           </li>
//                         </ul>
//                       )}

//                       {/* <ul className='PatternType_outer'>
//                                                 <li class="">
//                                                     <a href="#" rel="fg_img_repeat" layout="tile">
//                                                         <img src="https://www.texindiamart.com/fabric-generator/layout_center.png" alt="" />
//                                                     </a>
//                                                     <h6>Basic</h6>
//                                                 </li>

//                                                 <li class="">
//                                                     <a href="#" rel="fg_img_repeat" layout="tile">
//                                                         <img src="https://www.texindiamart.com/fabric-generator/layout_repeat.png" alt="" />
//                                                     </a>
//                                                     <h6>Half-drop</h6>
//                                                 </li>
//                                                 <li class="">
//                                                     <a href="#" rel="fg_img_repeat" layout="tile">
//                                                         <img src="https://www.texindiamart.com/fabric-generator/layout_vert.png" alt="" />
//                                                     </a>
//                                                     <h6>Half-brick</h6>
//                                                 </li>
//                                                 <li class="">
//                                                     <a href="#" rel="fg_img_repeat" layout="tile">
//                                                         <img src="https://www.texindiamart.com/fabric-generator/layout_brick.png" alt="" />
//                                                     </a>
//                                                     <h6>Center</h6>
//                                                 </li>
//                                                 <li class="">
//                                                     <a href="#" rel="fg_img_repeat" layout="tile">
//                                                         <img src="https://www.texindiamart.com/fabric-generator/layout_repeat.png" alt="" />
//                                                     </a>
//                                                     <h6>Mirror</h6>
//                                                 </li>
//                                             </ul> */}
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Col>
//               </Row>
//             </Tab.Container>
//             {/* <div className="mainSize">
//                         <div className='col-sm-6'>
//                             <button className='show_btnNext' onClick={handleClick}>Click</button>

//                         </div>
//                         <div className='col-sm-6'>
//                             <button className='show_btnNext' onClick={handleClick}>Click</button>

                           
//                             {isShown && (
//                                 <div>
//                                     <h2>Some content here</h2>
//                                 </div>
//                             )}

                       
//                             {isShown && <CanvasTest />
//                             }
//                         </div>

//                         </div> */}

//             {/* <Tabs
//                             defaultActiveKey="profile"
//                             id="uncontrolled-tab-example"
//                             className=""
//                         >
//                             <Tab eventKey="home" title="Rotate The Pattern " >

//                             </Tab>
//                             <Tab eventKey="profile" title=" Pattern Type">
//                                 <ul className='PatternType_outer'>
//                                     <li class="">
//                                         <a href="#" rel="fg_img_repeat" layout="tile">
//                                             <img src="https://www.texindiamart.com/fabric-generator/layout_center.png" alt="" />
//                                         </a>
//                                         <h6>Basic</h6>
//                                     </li>

//                                     <li class="">
//                                         <a href="#" rel="fg_img_repeat" layout="tile">
//                                             <img src="https://www.texindiamart.com/fabric-generator/layout_repeat.png" alt="" />
//                                         </a>
//                                         <h6>Half-drop</h6>
//                                     </li>
//                                     <li class="">
//                                         <a href="#" rel="fg_img_repeat" layout="tile">
//                                             <img src="https://www.texindiamart.com/fabric-generator/layout_vert.png" alt="" />
//                                         </a>
//                                         <h6>Half-brick</h6>
//                                     </li>
//                                     <li class="">
//                                         <a href="#" rel="fg_img_repeat" layout="tile">
//                                             <img src="https://www.texindiamart.com/fabric-generator/layout_brick.png" alt="" />
//                                         </a>
//                                         <h6>Center</h6>
//                                     </li>
//                                     <li class="">
//                                         <a href="#" rel="fg_img_repeat" layout="tile">
//                                             <img src="https://www.texindiamart.com/fabric-generator/layout_repeat.png" alt="" />
//                                         </a>
//                                         <h6>Mirror</h6>
//                                     </li>
//                                 </ul>
//                             </Tab>
//                         </Tabs> */}
//           </div>
//           {/* <div className='Pattern_MainSec'>
//                         <h4 className='designSize_text'>Rotate The Pattern</h4>
//                         <Dropdown>
//                             <Dropdown.Toggle variant="outline-light" className='selectpattern_sec'>
//                                 Pattern Type
//                             </Dropdown.Toggle>
//                             <Dropdown.Menu>
//                                 <Dropdown.Item href="#">
//                                     <li class="">
//                                         <a href="#" rel="fg_img_repeat" layout="tile">
//                                             <img src="https://www.texindiamart.com/fabric-generator/layout_repeat.png" alt="" />
//                                         </a>
//                                     </li>
//                                 </Dropdown.Item>
//                                 <Dropdown.Item href="#">
//                                     <li class="">
//                                         <a href="#" rel="fg_img_repeat" layout="tile">
//                                             <img src="https://www.texindiamart.com/fabric-generator/layout_repeat.png" alt="" />
//                                         </a>
//                                     </li>
//                                 </Dropdown.Item>
//                                 <Dropdown.Item href="#">
//                                     <li class="">
//                                         <a href="#" rel="fg_img_repeat" layout="tile">
//                                             <img src="https://www.texindiamart.com/fabric-generator/layout_mirror.png" alt="" />
//                                         </a>
//                                     </li>
//                                 </Dropdown.Item>
//                                 <Dropdown.Item href="#">
//                                     <li class="">
//                                         <a href="#" rel="fg_img_repeat" layout="tile">
//                                             <img src="https://www.texindiamart.com/fabric-generator/layout_vert.png" alt="" />
//                                         </a>
//                                     </li>
//                                 </Dropdown.Item>
//                             </Dropdown.Menu>
//                         </Dropdown>
//                     </div> */}

//           <div className="designSize_MainSec">
//             <h4 className="designSize_text">Choose a fabric</h4>
//             {/* <Form.Select aria-label="Default select example">
//                             <option>Select a Fabric</option>
//                             <option value="1">One</option>
//                             <option value="2">Two</option>
//                             <option value="3">Three</option>

//                         </Form.Select> */}
//             <Button
//               className="PopUp_rightBtn"
//               variant="primary"
//               onClick={() => setShow(true)}
//             >
//               Select a Fabric
//             </Button>
//           </div>

//           <div className="FabricSize_MainSec">
//             <h4 className="designSize_text">Select Size and Amount</h4>
//             <div className="selectSize_section">
//               {/* <input type="text" value='2' disabled /> */}
//               <Form.Select aria-label="Default select example">
//                 <option>Select a Fabric</option>
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//               </Form.Select>
//             </div>
//           </div>
//           <div className="prce_mainSec">
//             <div className="col-sm-6 qty_sec">
//               <h6>Qty</h6>
//               {/* <input type="number" value='1' /> */}
//               <input type="number" class="form-control"></input>
//             </div>
//             <div className="col-sm-6 price_sec">
//               <span>$ 300</span>
//             </div>
//           </div>

//           <div className="checFinalBtn_sec">
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//               <Form.Check
//                 type="checkbox"
//                 label="I have understood the Terms & Conditions"
//               />
//             </Form.Group>
//           </div>

//           <div className="AddCart_btnSec">
//             <button variant="outline-primary">
//               <span>Add To Cart</span>
//               <img src={cart} alt="" />
//             </button>{" "}
//           </div>

//           {/* <Button variant="primary" onClick={() => setShow(true)}>
//         Custom Width Modal
//       </Button> */}

//           <Modal
//             show={show}
//             onHide={() => setShow(false)}
//             dialogClassName="modal-90w"
//             aria-labelledby="example-custom-modal-styling-title"
//           >
//             <Modal.Header closeButton>
//               <Modal.Title id="example-custom-modal-styling-title">
//                 Custom Modal Styling
//               </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <p>
//                 Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
//                 unde commodi aspernatur enim, consectetur. Cumque deleniti
//                 temporibus ipsam atque a dolores quisquam quisquam adipisci
//                 possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
//                 quasi quod accusamus eos quod. Ab quos consequuntur eaque quo
//                 rem! Mollitia reiciendis porro quo magni incidunt dolore amet
//                 atque facilis ipsum deleniti rem!
//               </p>
//             </Modal.Body>
//           </Modal>
//         </div>
//       </Col>
//     </>
//   );
// }
