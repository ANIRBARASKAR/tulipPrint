import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import flo from "../assets/images/flo.jpg";
import pillow from "../assets/images/pillow.png";
import PL from "../assets/images/PL.png";
import PL1 from "../assets/images/PL1.png";
import PL2 from "../assets/images/PL2.png";
import PL3 from "../assets/images/PL3.png";
import PL4 from "../assets/images/PL4.png";
import PL5 from "../assets/images/PL5.png";
import { fabric } from "fabric";
export default function Canvas(props) {
  var canvas = new fabric.Canvas("designCanvas");

  const designCanvasHeight = canvas.height;
  var ctx = canvas.getContext("2d");

  const {
    basic,
    halfDrop,
    halfBrick,
    center,
    mirror,
    setbasic,
    sethalfDrop,
    sethalfBrick,
    setcenter,
    setmirror,
    designSize1,
    rotation,
    inputValue,
    handleRotation,
    handleUpload,
  } = props;

  //  set Ruler's Height & width Dynamically in cm
  const cmWidth = 18;
  const cmHeight = 18;

  // var dynamicWidth = 37.7952755906 * cmWidth + 37.7952755906;
  var dynamicWidth = 37.7952755906 * cmWidth;
  console.log("dynamicWidth", dynamicWidth);

  // var dynamicHeight = 37.7952755906 * cmHeight + 37.7952755906;
  var dynamicHeight = 37.7952755906 * cmHeight;
  console.log("dynamicHeight", dynamicHeight);

  var size = designSize1 * 37.7952755906;
  console.log("design size in pexls size1 ", size);

  var imgUrl = inputValue;

  // **************** uploadImage function
  function uploadImage() {
    setbasic(true);

    var canvas = new fabric.Canvas("canvasBottom");
    var ctx = canvas.getContext("2d");
    var image = new Image();
    image.onload = function (img) {
      // alert("  FROM UPLOAD designWidth     " + this.width +  "   designHeight    "+ this.height)

      if (designSize1) {
        var img = new fabric.Image(image, {
          angle: 0,
          // scaleX: canvas.getWidth() / image.width,
          // width:size,

          // scaleY: canvas.getHeight() / image.height,
          left: 25,
          top: 25,
        });
        console.log("img.width with TRUE", img.width, img.height);
      } else {
        var img = new fabric.Image(image, {
          angle: 0,
          width: cw,
          height: ch,
          left: 0,
          top: 0,
        });
        console.log("img.width with FALSE", img.width, img.height);
      }
      // canvas.add(img);
      console.log(" img from canvas", img);
      console.log("canvas.getWidth()", canvas.getWidth());
    };
    image.src = imgUrl;

    // canvasWithRuler();
  }

  //
  // ******** Overlay *********

  // ************ basic
  basic && basic1();

  function basic1() {
    setmirror(false);
    setbasic(false);

    sethalfDrop(false);
    sethalfBrick(false);
    setcenter(false);

    var canvas = new fabric.Canvas("canvasBottom");
    const ctx = canvas.getContext("2d");

    // var img = document.getElementById("geeks");
    var img = document.createElement("img");
    img.setAttribute("crossOrigin", "anonymous");
    img.src = imgUrl;
    var height = img.naturalHeight;

    console.log(" img.naturalHeight", height);

    //  *************---------*********---

    //  *************---------*********---

    var imgwidth = 0;
    var imgheight = 0;
    img.onload = function () {
      // alert("  FROM Basic designWidth     " + this.width +  "   designHeight    "+ this.height)

      if (designSize1 == 5) {
        imgwidth = 188.976377953;
        imgheight = imgwidth * 1.5;
      } else if (designSize1 == 10) {
        imgwidth = 377.952755906;
        // imgheight = this.height;
        imgheight = imgwidth * 1.5;
      } else if (designSize1 == 15) {
        imgwidth = 566.929133859;
        imgheight = imgwidth * 1.5;
      } else if (designSize1 == 20) {
        imgwidth = 755.905511812;
        imgheight = imgwidth * 1.5;
      } else {
        imgwidth = 94.48;
        imgheight = imgwidth * 1.5;
      }

      fillPattern(this, imgwidth, imgheight);
    };

    function fillPattern(img, w, h) {
      // alert("  FROM fillpattern basic designWidth     " + img.width +  "   designHeight    "+ img.height)

      var origW = w;
      var origH = h;
      var orignalHeight = h;

      console.log("orignalHeight", orignalHeight);
      let i = 0;
      w = 0;
      h = 0;

      while (h < canvas.height + origH) {
        while (w < canvas.width) {
          ctx.drawImage(
            img,
            w,

            i % 2 == 0 ? h : h + origH * -1,
            // i % 2 == 0 ? h : h + (origW / 2) * -1

            origW,

            origH
          );

          w += origW;
          i++;
        }
        h += origH;
        i = 0;
        w = 0;
      }
    }
    canvasWithRuler();
  }

  // *****************  halfDrop
  halfDrop && halfDrop1();

  function halfDrop1() {
    setmirror(false);
    setbasic(false);

    sethalfDrop(false);
    sethalfBrick(false);
    setcenter(false);

    var canvas = new fabric.Canvas("canvasBottom");
    const ctx = canvas.getContext("2d");

    var img = document.createElement("img");
    img.setAttribute("crossOrigin", "anonymous");
    img.src = imgUrl;

    var imgwidth = 0;
    var imgheight = 0;
    img.onload = function () {
      if (designSize1 == 5) {
        imgwidth = 188.976377953;
        imgheight = imgwidth * 1.5;
      } else if (designSize1 == 10) {
        imgwidth = 377.952755906;
        imgheight = imgwidth * 1.5;
      } else if (designSize1 == 15) {
        imgwidth = 566.929133859;
        imgheight = imgwidth * 1.5;
      } else if (designSize1 == 20) {
        imgwidth = 755.905511812;
        imgheight = imgwidth * 1.5;
      } else {
        imgwidth = 94.48;
        imgheight = imgwidth * 1.5;
      }

      fillPattern(this, imgwidth, imgheight);
    };

    function fillPattern(img, w, h) {
      var origW = w;
      var origH = h;

      let i = 0;
      w = 0;
      h = 0;

      while (h < canvas.height + origH) {
        while (w < canvas.width) {
          ctx.drawImage(
            img,

            // i % 2 == 0 ? h : h + origH * -1,
            // i % 2 != 0 ? h : h + (origH / 2) * -1,

            // drop             i % 2 == 0 ? h : h + (origW / 2) * -1,

            w,
            i % 2 == 0 ? h : h + (origH / 2) * -1,

            origW,
            origH
          );

          w += origW;
          i++;
        }
        h += origH;
        i = 0;
        w = 0;
      }
    }
  }

  // *********** halfBrick ************
  halfBrick && halfBrick1();
  function halfBrick1() {
    setmirror(false);
    setbasic(false);

    sethalfDrop(false);
    sethalfBrick(false);
    setcenter(false);

    var canvas = new fabric.Canvas("canvasBottom");
    const ctx = canvas.getContext("2d");

    var img = document.createElement("img");
    img.setAttribute("crossOrigin", "anonymous");
    img.src = imgUrl;

    var imgwidth = 0;
    var imgheight = 0;
    img.onload = function () {
      if (designSize1 == 5) {
        // imgheight = imgwidth*1.5 ;
        imgwidth = 188.976377953;
        imgheight = 188.976377953;
      } else if (designSize1 == 10) {
        imgwidth = 377.952755906;
        imgheight = imgwidth;
      } else if (designSize1 == 15) {
        imgwidth = 566.929133859;
        imgheight = imgwidth;
      } else if (designSize1 == 20) {
        imgwidth = 755.905511812;
        imgheight = imgwidth;
      } else {
        imgwidth = 94.48;
        imgheight = imgwidth;
      }

      fillPattern(this, imgwidth, imgheight);
    };

    function fillPattern(img, w, h) {
      var origW = w;
      var origH = h;

      let i = 0;
      w = 0;
      h = 0;

      while (h < canvas.height + origW) {
        while (w < canvas.width) {
          ctx.drawImage(
            img,

            // i % 2 == 0 ? h : h + origH * -1,
            // i % 2 != 0 ? h : h + (origH / 2) * -1,

            i % 2 == 0 ? h : h + (origH / 2) * -1,

            w,

            origW,
            origH
          );

          w += origW;
          i++;
        }
        h += origH;
        i = 0;
        w = 0;
      }
    }
  }

  //  ********** center ********
  center && center1();
  function center1() {
    setbasic(false);
    sethalfDrop(false);
    sethalfBrick(false);
    setmirror(false);
    setcenter(false);

    var img = document.createElement("img");
    img.setAttribute("crossOrigin", "anonymous");
    img.src = imgUrl;

    var imgwidth = 0;
    var imgheight = 0;
    img.onload = function () {
      if (designSize1 == 5) {
        imgwidth = 188.976377953;
        imgheight = imgwidth * 1.5;
      } else if (designSize1 == 10) {
        imgwidth = 377.952755906;
        imgheight = imgwidth * 1.5;
      } else if (designSize1 == 15) {
        imgwidth = 566.929133859;
        imgheight = imgwidth * 1.5;
      } else if (designSize1 == 20) {
        imgwidth = 755.905511812;
        imgheight = imgwidth * 1.5;
      } else {
        imgwidth = 94.48;
        imgheight = imgwidth * 1.5;
      }

      fillPattern(this, imgwidth, imgheight);
    };

    function fillPattern(img, w, h) {
      var canvas = new fabric.Canvas("canvasBottom");
      const ctx = canvas.getContext("2d");

      console.log("orignal canvas", canvas.height, canvas.width);
      console.log("center canvas", canvas.height / 4, canvas.width / 4);

      var origX = canvas.width / 2;
      var origY = canvas.height / 2;
      var origW = w;
      var origH = h;

      // var jira =  ctx.drawImage(
      //     img,

      //     origW,
      //     origH,
      //     origX,
      //     origY,
      //     );

      // ctx.drawImage(img, origX, origY, origW, origX)
      // ctx.drawImage(img, dynamicWidth/3, dynamicHeight/4, origW, origX)
      ctx.drawImage(
        img,
        // canvas.width / 2 - img.width / 2,
        canvas.width / 2 - imgwidth / 2,
        canvas.height / 2 - imgheight / 2,
        imgwidth,
        imgheight
      );
    }
  }

  // ********** mirror *********
  mirror && mirror1();

  function mirror1() {
    setmirror(false);
    setbasic(false);

    sethalfDrop(false);
    sethalfBrick(false);
    setcenter(false);

    var canvas = new fabric.Canvas("canvasBottom");
    const ctx = canvas.getContext("2d");

    var img = document.createElement("img");
    img.setAttribute("crossOrigin", "anonymous");
    img.src = imgUrl;

    var imgwidth = 0;
    var imgheight = 0;
    img.onload = function () {
      if (designSize1 == 5) {
        imgwidth = 188.976377953;
        imgheight = imgwidth * 1.5;
      } else if (designSize1 == 10) {
        imgwidth = 377.952755906;
        imgheight = imgwidth * 1.5;
      } else if (designSize1 == 15) {
        imgwidth = 566.929133859;
        imgheight = imgwidth * 1.5;
      } else if (designSize1 == 20) {
        imgwidth = 755.905511812;
        imgheight = imgwidth * 1.5;
      } else {
        imgwidth = 94.48;
        imgheight = imgwidth * 1.5;
      }

      fillPattern(this, imgwidth, imgheight);
    };

    function fillPattern(img, w, h) {
      var origW = w;
      var origH = h;

      let i = 1;
      w = 0;
      h = 0;

      const reflect = imgwidth * 2;
      while (h < canvas.height + origW) {
        while (w < canvas.width) {
          // *************

          ctx.drawImage(
            img,

            w,
            i % 2 == 0 ? h : h,
            // i % 2 == 0 ?  h:h + (origH / 1 ) * 1 ,

            origW,
            origH
          );

          ctx.scale(-1, 1);

          ctx.translate(-reflect, 0);
          // ctx.translate(-reflect, 0);
          // ctx.translate(-reflect, 0);
          ctx.drawImage(
            img,

            w,
            i % 2 == 0 ? h : h * 1,
            // i % 2 == 0 ?  h:h + (origH / 2  ) * 1 ,

            origW,
            origH
          );

          // ctx.scale(-1, 1);
          // ctx.translate(-reflect, 0);

          w += origW;
          i++;
          // ctx.translate(-reflect, 0);
        }

        h += origH;
        i = 0;
        w = 0;

        // *************
      }
    }
  }

  // ************ canvas Rotation **********

  // var canvas = document.getElementById("one");
  // var context = canvas.getContext("2d");
  var cw = canvas.width;
  var ch = canvas.height;

  // create button
  // var button = document.getElementById("rotate");
  // function handleRotation1() {
  //   // rotate the canvas 90 degrees each time the button is pressed
  //   rotate();
  // }
  // handleRotation && handleRotation1();

  var myImage,
    rotating = false;

  // function rotate() {
  //   if (!rotating) {
  //     rotating = true;
  //     // store current data to an image
  //     myImage = new Image();
  //     myImage.src = canvas.toDataURL();

  //     myImage.onload = function () {
  //       // reset the canvas with new dimensions
  //       canvas.width = ch;
  //       canvas.height = cw;
  //       cw = canvas.width;
  //       ch = canvas.height;

  //       ctx.save();
  //       // translate and rotate
  //       ctx.translate(cw, ch / cw);
  //       ctx.rotate(Math.PI / 2);
  //       // draw the previows image, now rotated
  //       // ctx.drawImage(myImage, 0, 0);
  //       ctx.restore();

  //       // clear the temporary image
  //       // myImage = null;

  //       rotating = false;
  //     };
  //   }
  // }
  // **************** canvas with Ruler
  function canvasWithRuler() {
    // var canvas2 = document.getElementById("canvasBottom");
    var canvas2 = new fabric.Canvas("canvasBottom");

    var ctx2 = canvas2.getContext("2d");

    drawRulers(ctx2, 37.7952755906, cmWidth, cmHeight);

    function drawRulers(t, e, n, s) {
      const i = 25;

      //  Ruler's  x-axis & Y-axis
      t.fillStyle = "white";
      t.fillRect(i, 0, dynamicWidth, i);
      t.fillRect(0, i, i, dynamicHeight);
      t.fillStyle = "black";
      t.fillRect(0, 0, i, i);
      t.beginPath();
      t.font = "16px Lato";
      t.fillStyle = "white";
      t.textAlign = "center";
      t.fillText("cm.", i / 2, i - 5);

      let l = true;
      let c = true;

      t.fillStyle = "black";
      for (let d = 1; n >= d; d += 1) {
        const h = d * e;
        let u = `${d}`;
        if (
          (12 > n && !l) ||
          (32 > n && !l && c) ||
          (n >= 32 && d % 12 === 0)
        ) {
          t.fillText(u, h + i, i - 8);
        } else {
          // t.fillText(l ? d   : "|", h + i, i - 2);
          t.fillText(l ? d : d, h + i, i - 8);
        }
        l = !l;
        if (!l) {
          c = !c;
        }
      }

      l = true;
      c = true;

      t.textAlign = "right";
      for (let p = 1; s >= p; p += 1) {
        const f = p * e;
        const u = `${p}`;
        if (
          (12 > s && !l) ||
          (32 > s && !l && c) ||
          (s >= 32 && p % 12 === 0)
        ) {
          t.fillText(u, i - 8, f + i);
        } else {
          t.fillText(p ? p : "Anir", i - 8, f + i);
        }
        l = !l;
        if (!l) {
          c = !c;
        }
      }
    }
  }

  useEffect(() => {
    //  handleOverLay()
    // designSize1 ? console.log("anir %%%%%%%%%%%") : handleOverLay();
    // setbasic(true)
    // designSize1 ? console.log("need to call uploadImage function ") :  uploadImage()
    setTimeout(uploadImage, 200);
    // setbasic(true);

    canvasWithRuler();
  }, [rotation, inputValue, handleRotation]);

  useEffect(() => {
    // basic1()
    setbasic(true);
  }, [designSize1]);

  return (
    <>
      <Col xs={12} md={8} className="MainLeftSection">
        <div className="innerLeft_sec">
          <div className="Outer_imageSec">
            <img src={pillow} />
          </div>
          <div className="Outer_imageSec">
            <img src={PL3} />
          </div>
          <div className="Outer_imageSec">
            <img src={PL2} />
          </div>
          <div className="Outer_imageSec">
            <img src={PL1} />
          </div>
          <div className="Outer_imageSec">
            <img src={PL4} />
          </div>
        </div>
        <div className="cannvas_outer ">
          <div
            id="canvas_div"
            style={{
              float: "left",
              position: "relative",
            }}
          >
            <canvas
              id="canvasBottom"
              style={{
                border: "1px solid black",
                // paddingLeft:25,
                // paddingTop:25
              }}
              width={dynamicWidth}
              height={dynamicHeight}
            ></canvas>

            {/* <canvas
              id="designCanvas"
              width={size || 188.976377953}
              height={size || 188.976377953}
              style={{
                position: "relative",
                marginTop: -587,
                marginLeft: 25,
              }}
            ></canvas> */}

            <img src={imgUrl} style={{ visibility: "hidden" }} id="geeks" />
          </div>
        </div>
      </Col>
    </>
  );
}
