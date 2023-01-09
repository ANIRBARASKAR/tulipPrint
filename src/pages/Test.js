// import React from 'react';
// import { fabric } from 'fabric';
// const Test = ({inputValue}) => {

//     const canvas = new fabric.Canvas('canvas')

//        // Load the image file
// fabric.Image.fromURL(inputValue, function(img) {

//     // Get the original scaling factor
//     var scalingFactor = img.getOriginalScalingY();
  
//     // Calculate the default height of the image
//     var defaultHeight = img.width * scalingFactor;
  
//     // Use the default height to set the height of the image
//     img.height = defaultHeight;

//     console.log("img.height from test",img.height);
  
//     // Add the image to the canvas
//     canvas.add(img);
//   });

  
  
  
//     return (
//         <div>
//             Test

//             <canvas id='canvas' height={500} width={500} style={{border: "2px solid red"}}>

//             </canvas>
//         </div>
//     );
// }

// export default Test;
