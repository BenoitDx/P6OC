import React, { useState } from 'react';
import '../styles/Collapse.css'

function Collapse({ title, text }) {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className='collapse-about' onClick={handleToggle}>
      <div className='collapse-header-about'>
        <span className='collapse-title-about'>{title}</span>
      </div>

      {show ? <p className='collapse-text-about'>{text}</p> : null}
    </div>
  );
}

export default Collapse;