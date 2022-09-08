import React, { useState } from 'react';

import finalSpaceCharacters, { ContactsOptions } from '../sideBar/data';
import ContactOptions from './ContactOptions';
import ContactList from './ContactList';
import ContactsStyle from './ContactsStyle';

export default function Contacts() {
  const [hover, setHover] = useState({ name: '', show: false });
  const [selected, setSelected] = useState({ name: '' });
  const remove = (id) => {
    setHover({ name: '', show: false });
    const index = finalSpaceCharacters.findIndex((c) => c.id === id);
    finalSpaceCharacters.splice(index, 1);
  };
  return (
    <ContactsStyle>
      <div className="main">
        <ContactOptions
          contacts={ContactsOptions}
          setHover={setHover}
          selected={selected}
          setSelected={setSelected}
        />
        <p className="text-label">Mensagens diretas</p>
        <ContactList
          contacts={finalSpaceCharacters}
          setHover={setHover}
          hover={hover}
          remove={remove}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </ContactsStyle>
  );
}
