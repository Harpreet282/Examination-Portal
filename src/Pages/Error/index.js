import React from 'react';
import './error.css';

function Error() {
  return (
    <div className="error-page margin-from-top">
      <div className="absolute-center">
        <h1>404 Error</h1>
        <p>This page doesn't exist.</p>
      </div>
    </div>
  );
}

export default Error;
