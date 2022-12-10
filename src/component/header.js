import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="w-full flex justify-start items-start">
    <Link to={'/list'}>
      <div className="text-4xl font-bold mr-10 items-baseline">Libarary</div>
    </Link>
    <Link to={'/'} className=" text-red-400 text-2xl font-semibold mr-10 pt-2">
      <div>Home</div>
    </Link>
    <Link
      to={'/list'}
      className=" text-blue-400 text-2xl font-semibold mr-10 pt-2"
    >
      <div>List</div>
    </Link>
    <Link
      to={'/add'}
      className=" text-green-400 text-2xl font-semibold mr-10 pt-2"
    >
      <div>Add</div>
    </Link>
  </div>
);

export default Header;
