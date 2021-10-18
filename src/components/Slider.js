import React from "react";
import Progressbar from "./Progressbar.js";
import StarSlider from "./StarSlider.js";

function Slider() {
  return (
    <div className="flex flex-col   col-start-2 col-end-4 ">
      <div className="uppercase">Rating & Reviews</div>
      <br></br>
      <div className="grid grid-cols-6">
        <div className="text-4xl">3</div>
        <br/>
<br/>
<br/>
<br/>
       <StarSlider/>
      </div>
    
      <div className="text-xs">100% of reviews of recommend this product</div>

    <Progressbar />
    </div>
    
  );
}

export default Slider;
