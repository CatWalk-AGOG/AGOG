import React from "react";
import AddReview from "./AddReview.js";
import Button from "./Button.js";
import Help from "./Help.js";
import Reponse from "./Reponse.js";
import ReviewsTow from "./ReviewsTow.js";
import StaerReview2 from "./StaerReview2.js";

function Reviews({ response,addcounter,count ,addhelp,counter}) {
  if (count<response.length){
    return (
      <div className="    flex flex-col col-start-4 col-end-8  ">
        <br></br>
        <br></br>
        <div className="flex flex-row">
          <p className="  font-bold ">
            {response.length} reviews,sorted by{" "}
          </p>
  
          <div className="relative ">
            <select className="underline font-bold">
              <option>Helpful</option>
              <option>Newest </option>
              <option>Relevant </option>
            </select>
          </div>
        </div>
        {/* <div className="col-start-1">
  <Star />
  </div>
  
        <Reviewsone />
         <br/> */}

  
        {response.slice(0,count).map((element, index) =>{
        
  
    return(
      <div >
        
  
        <StaerReview2 response={response} date={element.date } reviewer_name={element.reviewer_name}/>
  
        <br />
        <ReviewsTow summary={element.summary} recomande={element.recommend} body={element.body} />
        <br />
        <Reponse response={element.response} />
        <br />
        <Help counter={counter} addhelp={addhelp} />
      </div>
    )
  }
    
   
        
          
           )}
  <div className="felx flex-col">
  <Button  addcounter={addcounter}/>
  <AddReview  addcounter={addcounter}/>
  </div>
 
      </div>
    );
  }
  else  {
    return(
      <div className="    flex flex-col col-start-4 col-end-8  ">
      <br></br>
      <br></br>
      <div className="flex flex-row">
        <p className="  font-bold ">
          {response.length} reviews,sorted by{" "}
        </p>

        <div className="relative ">
          <select className="underline font-bold">
            <option>Helpful</option>
            <option>Newest </option>
            <option>Relevant </option>
          </select>
        </div>
      </div>
      {/* <div className="col-start-1">
<Star />
</div>

      <Reviewsone />
       <br/> */}


      {response.slice(0,count).map((element, index) =>{
      

  return(
    <div >
      

      <StaerReview2 response={response} date={element.date } reviewer_name={element.reviewer_name}/>

      <br />
      <ReviewsTow summary={element.summary} recomande={element.recommend} body={element.body} />
      <br />
      <Reponse response={element.response} />
      <br />
      <Help counter={counter} addhelp={addhelp} />
    </div>
  )
}
  
 
      
        
         )}
<div className="felx flex-col">
  <AddReview  addcounter={addcounter}/>
  </div>
    </div>
 
      )
  }
 
}

export default Reviews;
