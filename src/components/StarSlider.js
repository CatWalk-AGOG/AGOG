import React from 'react'

function StarSlider() {
    return (
        <div >
             <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
        />

        <ul className="flex flex-row">
          <li>
            <i className="fas fa-star fa-sm text-black -500 mr-1"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-black-500 mr-1"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-black-500 mr-1"></i>
          </li>
          <li>
            <i className="far fa-star fa-sm text-white-500 mr-1"></i>
          </li>
          <li>
            <i className="far fa-star fa-sm text-white-500 mr-1"></i>
          </li>
        </ul>
        </div>
    )
}

export default StarSlider
