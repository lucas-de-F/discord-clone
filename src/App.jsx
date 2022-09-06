/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import './index.css';
import './App.css';
import SideBar from './sideBar';

function App() {
  const getTitles = () => {
    const title = document.getElementById('app-title');
    const myText = 'Discord';

    title.innerText = `${myText} | SUCO DE FRUTA`;
  };
  getTitles();

  return (
    <div className="flex h-screen w-screen flex-row">
      <SideBar />
      <div className=" w-[250px] min-w-[250px] bg-gray-700" />
      <div className="w-full bg-gray-600" />
    </div>
  );
}

export default App;
