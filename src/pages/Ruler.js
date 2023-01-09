// import React, { useState, useEffect } from "react";
// import { Col } from "react-bootstrap";
// import flo from "../assets/images/flo.jpg";
// import pillow from "../assets/images/pillow.png";
// import PL from "../assets/images/PL.png";
// import PL1 from "../assets/images/PL1.png";
// import PL2 from "../assets/images/PL2.png";
// import PL3 from "../assets/images/PL3.png";
// import PL4 from "../assets/images/PL4.png";
// import PL5 from "../assets/images/PL5.png";
// import { fabric } from "fabric";
// export default function Canvas(props) {
//   var canvas = new fabric.Canvas("designCanvas");

//   const designCanvasHeight = canvas.height;
//   var ctx = canvas.getContext("2d");

//   const {
//     basic,
//     halfDrop,
//     halfBrick,
//     center,
//     mirror,
//     setbasic,
//     sethalfDrop,
//     sethalfBrick,
//     setcenter,
//     setmirror,
//     designSize1,
//     rotation,
//     inputValue,
//     handleRotation,
//   } = props;

//   //  set Ruler's Height & width Dynamically in cm
//   const cmWidth = 15;
//   const cmHeight = 15;

//   var dynamicWidth = 37.7952755906 * cmWidth + 37.7952755906;
//   console.log("dynamicWidth", dynamicWidth);

//   var dynamicHeight = 37.7952755906 * cmHeight + 37.7952755906;
//   console.log("dynamicHeight", dynamicHeight);

//   var size = designSize1 * 37.7952755906;
//   console.log("design size in pexls size1 ", size);

//   var imgUrl = inputValue;

//   // **************** uploadImage function
//   const uploadImage = () => {
//     var image = new Image();
//     image.onload = function (img) {
//       var canvas = new fabric.Canvas("designCanvas");

//       var ctx = canvas.getContext("2d");

//       if (designSize1) {
//         var img = new fabric.Image(image, {
//           angle: 0,
//           scaleX: canvas.getWidth() / image.width,

//           scaleY: canvas.getHeight() / image.height,
//           left: 0,
//           top: 0,
//         });
//         console.log("img.width with TRUE", img.width, img.height);
//       } else {
//         var img = new fabric.Image(image, {
//           angle: 0,
//           width: cw,
//           height: ch,
//           left: 0,
//           top: 0,
//         });
//         console.log("img.width with FALSE", img.width, img.height);
//       }
//       canvas.add(img);
//       console.log(" img from canvas", img);
//       console.log("canvas.getWidth()", canvas.getWidth());
//     };
//     image.src = imgUrl;
//   };

//   //
//   // ******** Overlay *********

//   const handleOverLay = () => {
//     console.log("handleOverLay", handleOverLay);

//     fabric.Image.fromURL(inputValue, function (img) {
//       console.log(" ********* img", img);
//       console.log("img.width ******", img.width);
//       console.log("canvas.getWidth() ******", canvas.getWidth());
//       console.log(
//         "canvas.getWidth() / img.width ******",
//         canvas.getWidth() / img.width
//       );
//       console.log("img.height ******", img.height);
//       console.log("canvas.getHeight() ******", canvas.getHeight());
//       console.log(
//         "canvas.getHeight() / img.height ******",
//         canvas.getHeight() / img.height
//       );
//       var imgWidth = size;
//       var imgHeight = size;

//       designSize1
//         ? img.set({
//             scaleX: canvas.width / img.width,
//             scaleY: canvas.height / img.height,
//             objectCaching: false,
//             originX: "left",
//             originY: "top",
//           })
//         : img.set({
//             scaleX: canvas.getWidth() / img.width,
//             scaleY: canvas.getHeight() / img.height,
//             objectCaching: false,
//             originX: "left",
//             originY: "top",
//           });

//       canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
//     });
//   };

//   // ************ basic
//   basic && basic1();
//   function basic1() {
//     sethalfDrop(false);
//     sethalfBrick(false);
//     setcenter(false);
//     setmirror(false);
//     var canvas = new fabric.Canvas("designCanvas");
//     var ctx = canvas.getContext("2d");

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     var img = document.getElementById("geeks");
//     //
//     var pattern = ctx.createPattern(img, "repeat");
//     ctx.rect(0, 0, size, size);
//     ctx.fillStyle = pattern;
//     ctx.fill();
//   }

//   // *****************  halfDrop
//   halfDrop && halfDrop1();
//   function halfDrop1() {
//     var canvas = new fabric.Canvas("designCanvas");

//     setbasic(false);
//     sethalfBrick(false);
//     setcenter(false);
//     setmirror(false);

//     var img = document.createElement("img");
//     img.setAttribute("crossOrigin", "anonymous");
//     img.src = imgUrl;

//     var imgwidth = 0;
//     var imgheight = 0;
//     img.onload = function () {
//       imgwidth = img.width / 1.6;
//       imgheight = img.height / 1.6;
//       fillPattern(this, imgwidth, imgheight);
//     };

//     function fillPattern(img, w, h) {
//       var origW = w;
//       var origH = h;

//       let i = 0;
//       w = 0;
//       h = 0;

//       while (h < canvas.height + origH) {
//         while (w < canvas.width) {
//           ctx.drawImage(
//             img,
//             w,
//             // i % 2 == 0 ? h + (origW / 2) * -1 : h,
//             // i % 2 == 0 ?  w + (origW / 2) * -1:w,
//             i % 2 == 0 ? h : h + (origW / 2) * -1,

//             origW,
//             origH
//           );
//           w += origW;
//           i++;
//         }
//         h += origH;
//         i = 0;
//         w = 0;
//       }
//     }
//   }

//   // *********** halfBrick ************
//   halfBrick && halfBrick1();
//   function halfBrick1() {
//     // var canvas = new fabric.Canvas("designCanvas");
//     var canvas = document.getElementById("designCanvas");

//     setbasic(false);
//     sethalfDrop(false);
//     setcenter(false);
//     setmirror(false);

//     var img = document.createElement("img");
//     img.setAttribute("crossOrigin", "anonymous");
//     img.src = imgUrl;

//     var imgwidth = 0;
//     var imgheight = 0;
//     img.onload = function () {
//       imgwidth = img.width / 1.6;
//       imgheight = img.height / 1.6;
//       fillPattern(this, imgwidth, imgheight);
//     };

//     function fillPattern(img, w, h) {
//       var origW = w;
//       var origH = h;

//       let i = 0;
//       w = 0;
//       h = 0;

//       while (h < canvas.height + origH) {
//         while (w < canvas.width) {
//           ctx.drawImage(
//             img,
//             w,
//             // i % 2 == 0 ? h : (origW / 2 *1)  ,
//             // i % 2 == 0 ?  w + (origW / 2) * -1:w,
//             i % 2 == 0 ? h : h + (origH / 2) * -1,

//             origW,
//             origH
//           );
//           w += origW;
//           i++;
//         }
//         h += origH;
//         i = 0;
//         w = 0;
//       }
//     }
//   }

//   //  ********** center ********
//   center && center1();
//   function center1() {
//     setbasic(false);
//     sethalfDrop(false);
//     sethalfBrick(false);
//     setmirror(false);

//     var canvas = new fabric.Canvas("designCanvas");

//     // Getting the image
//     var img = document.getElementById("geeks");

//     // Creating the image instance
//     var geeks = new fabric.Image(img, {
//       centeredScaling: true,
//     });

//     canvas.add(geeks);
//     canvas.centerObject(geeks);
//   }

//   // ********** mirror *********
//   mirror && mirror1();
//   function mirror1() {
//     setbasic(false);
//     sethalfDrop(false);
//     sethalfBrick(false);
//     setcenter(false);

//     //     var canvas = new fabric.Canvas("designCanvas");
//     //     const ctx = canvas.getContext("2d");
//     // // *********** prev
//     //     const image = new Image();
//     //     image.src = imgUrl;
//     //     console.log("image fro mirror pattern canvas.js",image);
//     //     image.onload = () => {
//     //       ctx.drawImage(image, 0, 0);
//     //       ctx.drawImage(image, 0, dynamicHeight / 2 - 2);
//     //       ctx.save();

//     //       // Flip the image horizontally
//     //       ctx.scale(-1, 1);

//     //       // right side reflection
//     //       ctx.translate(-400, 0);

//     //       // Draw the flipped igm
//     //       ctx.drawImage(image, 0, 0);
//     //       ctx.drawImage(image, 0, dynamicHeight / 2 - 2);
//     //       ctx.restore();

//     //     // **************** new
//     //   //   const image = new Image();
//     //   //   image.src = imgUrl;
//     //   //   image.onload = () => {
//     //   //     // ctx.drawImage(image, 0, 0);
//     //   //     // ctx.drawImage(image, 0, size / 2 - 2);
//     //   //     // ctx.drawImage(image, 0, 50);
//     //   //     ctx.save();

//     //   //     // Flip the image horizontally
//     //   //     ctx.scale(-1, 1);

//     //   //     // right side reflection
//     //   //     // ctx.translate(-400, 0);
//     //   //     ctx.translate(-400, 0);

//     //   //     // Draw the flipped igm
//     //   //     ctx.drawImage(image, 0, 50);
//     //   //     // ctx.drawImage(image, 0, size / 2 - 5);
//     //   //     ctx.drawImage(image, 0, 50);
//     //   //     ctx.restore();
//     //     };

//     // ######### new compare with basic

//     var canvas = new fabric.Canvas("designCanvas");
//     var ctx = canvas.getContext("2d");

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     var img = document.getElementById("geeks");

//     console.log("img.width from mirror", img.width);
//     //
//     var pattern = ctx.drawImage(img, 0, 0);
//     ctx.scale(-1, 1);
//     // var pattern = ctx.createPattern(img, "repeat-y");
//     // ctx.drawImage(img, 0 , 0);
//     ctx.save();

//     // console.log("updated img.width", img.width);
//     ctx.translate(-size, 0);
//     ctx.rect(0, 0, size, size);
//     // ctx.drawImage(img, 0, 50);

//     ctx.fillStyle = pattern;
//     ctx.fill();
//   }

//   // ************ canvas Rotation **********

//   // var canvas = document.getElementById("one");
//   // var context = canvas.getContext("2d");
//   var cw = canvas.width;
//   var ch = canvas.height;

//   // create button
//   // var button = document.getElementById("rotate");
//   function handleRotation1() {
//     // rotate the canvas 90 degrees each time the button is pressed
//     rotate();
//   }
//   handleRotation && handleRotation1();

//   var myImage,
//     rotating = false;

//   function rotate() {
//     if (!rotating) {
//       rotating = true;
//       // store current data to an image
//       myImage = new Image();
//       myImage.src = canvas.toDataURL();

//       myImage.onload = function () {
//         // reset the canvas with new dimensions
//         canvas.width = ch;
//         canvas.height = cw;
//         cw = canvas.width;
//         ch = canvas.height;

//         ctx.save();
//         // translate and rotate
//         ctx.translate(cw, ch / cw);
//         ctx.rotate(Math.PI / 2);
//         // draw the previows image, now rotated
//         // ctx.drawImage(myImage, 0, 0);
//         ctx.restore();

//         // clear the temporary image
//         // myImage = null;

//         rotating = false;
//       };
//     }
//   }
//   // **************** canvas with Ruler
//   const canvasWithRuler = () => {
//     var canvas2 = document.getElementById("canvasBottom");
//     var ctx2 = canvas2.getContext("2d");

//     drawRulers(ctx2, 37.7952755906, cmWidth, cmHeight);

//     function drawRulers(t, e, n, s) {
//       const i = 25;

//       //  Ruler's  x-axis & Y-axis
//       t.fillStyle = "black";
//       t.fillRect(i, 0, dynamicWidth, i);
//       t.fillRect(0, i, i, dynamicHeight);
//       t.fillStyle = "red";
//       t.fillRect(0, 0, i, i);
//       t.beginPath();
//       t.font = "16px Lato";
//       t.fillStyle = "white";
//       t.textAlign = "center";
//       t.fillText("cm.", i / 2, i - 5);

//       let l = true;
//       let c = true;

//       t.fillStyle = "white";
//       for (let d = 1; n >= d; d += 1) {
//         const h = d * e;
//         let u = `${d}`;
//         if (
//           (12 > n && !l) ||
//           (32 > n && !l && c) ||
//           (n >= 32 && d % 12 === 0)
//         ) {
//           t.fillText(u, h + i, i - 8);
//         } else {
//           // t.fillText(l ? d   : "|", h + i, i - 2);
//           t.fillText(l ? d : d, h + i, i - 8);
//         }
//         l = !l;
//         if (!l) {
//           c = !c;
//         }
//       }

//       l = true;
//       c = true;

//       t.textAlign = "right";
//       for (let p = 1; s >= p; p += 1) {
//         const f = p * e;
//         const u = `${p}`;
//         if (
//           (12 > s && !l) ||
//           (32 > s && !l && c) ||
//           (s >= 32 && p % 12 === 0)
//         ) {
//           t.fillText(u, i - 8, f + i);
//         } else {
//           t.fillText(p ? p : "\u2014", i - 8, f + i);
//         }
//         l = !l;
//         if (!l) {
//           c = !c;
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     canvasWithRuler();

//     //  handleOverLay()
//     // designSize1 ? console.log("anir %%%%%%%%%%%") : handleOverLay();
//     uploadImage();
//     // designSize1 ? console.log("need to call uploadImage function ") :  uploadImage()
//   }, [designSize1, rotation, inputValue, handleRotation]);

//   return (
//     <>
//       <Col xs={12} md={8} className="MainLeftSection">
//         <div className="innerLeft_sec">
//           <div className="Outer_imageSec">
//             <img src={pillow} />
//           </div>
//           <div className="Outer_imageSec">
//             <img src={PL3} />
//           </div>
//           <div className="Outer_imageSec">
//             <img src={PL2} />
//           </div>
//           <div className="Outer_imageSec">
//             <img src={PL1} />
//           </div>
//           <div className="Outer_imageSec">
//             <img src={PL4} />
//           </div>
//         </div>
//         <div className="cannvas_outer ">
//           <div
//             id="canvas_div"
//             style={{
//               float: "left",
//               position: "relative",
//             }}
//           >
//             <canvas
//               id="canvasBottom"
//               style={{
//                 border: "1px solid black",
//               }}
//               width={dynamicWidth}
//               height={dynamicHeight}
//             ></canvas>

//             <canvas
//               id="designCanvas"
//               width={size}
//               height={size}
//               style={{
//                 position: "relative",
//                 marginTop: -585,
//                 marginLeft: 25,
//               }}
//             ></canvas>

//             <img src={imgUrl} style={{ visibility: "hidden" }} id="geeks" />
//           </div>
//         </div>
//       </Col>
//     </>
//   );
// }
