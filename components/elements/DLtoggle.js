import React from 'react';

const Toggle = ({handleToggle}) => {
    
  return (
    <>
    <input onChange={handleToggle} type="checkbox" className="DL_checkbox checkbox w-min h-min" id="checkbox"/>
    <label htmlFor="checkbox" className="checkbox-label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <span className="ball"></span>
    </label>
    </>
  );
};

export default Toggle;
