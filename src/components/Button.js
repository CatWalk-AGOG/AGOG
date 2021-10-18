import React from "react";


function Button({addcounter}) {
  

  return (
    
      <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent  m-8" onClick={addcounter}>
        More Reviews
      </button>
   
    
  );
}

export default Button;