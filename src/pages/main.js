import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="text-7xl font-bold">Libarary</div>
      <div className="flex justify-around items-center w-64 mt-5 mr-2">
        <Link to={'/'} className=" text-red-400 text-2xl font-semibold">
          <div>Home</div>
        </Link>
        <Link to={'/list'} className=" text-blue-400 text-2xl font-semibold">
          <div>List</div>
        </Link>
        <Link to={'/add'} className=" text-green-400 text-2xl font-semibold">
          <div>Add</div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
