/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import './index.css';
import './App.css';

import SideBar from './sideBar';

export default function App() {
  return (
    <div className="flex h-screen w-screen flex-row">
      <SideBar />
      <div className=" w-[250px] min-w-[250px] bg-gray-700" />
      <div className="w-full bg-gray-600" />
    </div>
  );
}
