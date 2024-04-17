import React from 'react';
import Button from '../component/core/button/button';

function Dashboard() {
  const handleClick = () => {
    console.log('candidate added successfully');
  };

  return (
    <div>
        Dashboard Page<br/>
      <Button
        label="Click me"
        handleClick={handleClick}
        id="myButton"
        className="add-candidate"
        disabled={false}
      />
    </div>
  );
}

export default Dashboard;
