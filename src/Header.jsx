import React, { useState } from 'react';
import { MdMinimize, MdClose } from 'react-icons/md';
import { FiMinimize } from 'react-icons/fi';
import { TbArrowsMaximize } from 'react-icons/tb';

export const maximizeButton = () => {
  window.mainBar.maximize();
};
export const minimizeButton = () => {
  window.mainBar.minimize();
};
export const unmaximizeButton = () => {
  window.mainBar.unmaximize();
};

export const closeButton = () => {
  window.mainBar.close();
};

function Header() {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="-webkit-app-region: drag bg-slate-900 w-full h-10 flex  justify-end items-center rounded-t-xl titlebar">
      <h3 className="absolute left-[45vw] text-slate-100">Discord</h3>
      <div className="flex items-center justify-around w-20">
        <button
          type="button"
          onClick={minimizeButton}
          className="text-gray-100 bg-gray-700 p-1 rounded-full"
        >
          <MdMinimize />
        </button>
        <button
          type="button"
          onClick={() => {
            maximizeButton();
            setHidden(!hidden);
          }}
          className="text-gray-100 bg-gray-700 p-1 rounded-full"
          hidden={!hidden}
        >
          <TbArrowsMaximize />
        </button>
        <button
          type="button"
          onClick={() => {
            unmaximizeButton();
            setHidden(!hidden);
          }}
          className="text-gray-100 bg-gray-700 p-1 rounded-full"
          hidden={hidden}
        >
          <FiMinimize />
        </button>
        <button
          type="button"
          onClick={closeButton}
          className="bg-gray-700 text-gray-100 p-1 rounded-full"
        >
          <MdClose />
        </button>
      </div>
    </div>
  );
}
export default Header;
