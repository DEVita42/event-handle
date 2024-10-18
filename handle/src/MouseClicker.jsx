import React from 'react';

const MouseClicker = () => {
  const handleButtonClick = (event) => {
    console.log(event.target.name);
  };

  const handleImageClick = (event) => {
    console.log(event.target.src);
    event.stopPropagation();
  };

  return (
    <button name="one" onClick={handleButtonClick}>
      Click Me
      <img 
        src="handle\src\cat.jpg" 
        alt="cat" 
        onClick={handleImageClick} 
        style={{ marginLeft: '10px', cursor: 'pointer' }} 
      />
    </button>
  );
};

export default MouseClicker;