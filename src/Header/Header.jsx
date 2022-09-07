import React, { useState } from 'react';
import { MdMinimize, MdClose } from 'react-icons/md';
import { FiMinimize } from 'react-icons/fi';
import { TbArrowsMaximize } from 'react-icons/tb';
import {
  closeButton, maximizeButton, minimizeButton, unmaximizeButton,
} from './ipcFuncs';
import HeaderStyle from './HeaderStyle';

function Header() {
  const [hidden, setHidden] = useState(true);
  return (
    <HeaderStyle>
      <h3>Discord</h3>
      <div>
        <button type="button" onClick={minimizeButton}>
          <MdMinimize />
        </button>

        <button
          type="button"
          onClick={() => {
            maximizeButton();
            setHidden(!hidden);
          }}
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
          hidden={hidden}
        >
          <FiMinimize />
        </button>
        <button type="button" onClick={closeButton}>
          <MdClose />
        </button>
      </div>
    </HeaderStyle>
  );
}
export default Header;
