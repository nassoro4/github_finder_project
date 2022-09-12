import React from 'react';
import { useContext } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import AlertContext from '../context/alert/AlertContext';

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="flex mb-3 p-4  text-white rounded-md w-72 flex-wrap ">
        <IconContext.Provider value={{ color: 'red', size: '25px' }}>
          <FaInfoCircle />
        </IconContext.Provider>
        <div className="ml-3 flex-1 text-base font-semibold">{alert.msg}</div>
      </div>
    )
  );
}

export default Alert;
