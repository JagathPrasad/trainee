import React from 'react'

const popup = (props) => {
  return (props.trigger)?(
    <div className="popup">
         <div className="popupinner">
             <button className="close-btn">
                 close
             </button>
             {props.children}
         </div>
    </div>
  ):"";
}

export default popup