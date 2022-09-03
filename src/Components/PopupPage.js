import React from 'react'
import './PopupPage.css'

const PopupPage = ({ id, streetAddress, description, startTime, endTime, scarinessLevel, image }) => {
  return (
    <div className="popup-wrapper">
			<div className="popup-container">
			<p className="popup-street-address" >{streetAddress}</p>
			<p className="popup-start-time">🍬 Passing out candy from {startTime} to {endTime} 🍬</p>
			<p className="popup-description" >{description}</p>
			{/* <p className="popup-end-time">End Time: {endTime}</p> */}
			<p className="popup-scariness-level">Scariness Level: {scarinessLevel} 👻</p>
			<img className="popup-image" src={image} alt='house decor image'/>
    </div>
	</div>
  )
}

export default PopupPage