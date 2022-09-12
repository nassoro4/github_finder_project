import React from 'react';
import spinner from '../assets/img/spinner.gif';
function Spinner() {
  return (
    <div className="w-100  ">
      <img
        width={50}
        src={spinner}
        alt="loading..."
        className="text-center mx-auto mb-8"
      />
    </div>
  );
}

export default Spinner;
