import React from 'react';
import SubHeader from './SubHeader';
import SubLayout from './SubLayout';
import SubFooter from './SubFooter';
import './Dashboard.css'; // Importing the Dashboard CSS

function Table() {
  return (
    <div className="container">
      <div className="card">
        <table>
          <SubHeader />
          <SubLayout />
          <SubFooter />
        </table>
      </div>
    </div>
  );
}

export default Table;
