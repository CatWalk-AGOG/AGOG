
import React, { useState } from 'react';
import Popup from "reactjs-popup";
import Pop from './popUpCard';


export default function PopUp() {
    
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
    return (
        <div >
            <button type="button" className="relative button ml-4 p-20 border-2 border-transparent bg-white-500" onClick={(e) => { e.preventDefault(); setOpen(o => !o) }}>
                      </button>
                      <div className="pop"> 
                  <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                 
                    <Pop/>
                    
                  </Popup>
                  </div>
        </div>
    )
}