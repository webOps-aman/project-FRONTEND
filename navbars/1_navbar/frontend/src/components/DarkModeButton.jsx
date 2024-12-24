import React, { useState } from 'react'
import "./DarkModeButton.css";

const DarkModeButton = () => {

    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }
    const checkIsOn = isOn ? "on" : "off";
    const toggleBGColor = {backgroundColor:isOn ? "#4caf50" : "#f44336"};

  return (
    <div className='toggle-switch' style={toggleBGColor} onClick={handleToggleSwitch}>
      <div className={`switch ${checkIsOn}`}>
        <span className='switch-state'>{checkIsOn}</span>
      </div>
    </div>
  )
}

export default DarkModeButton