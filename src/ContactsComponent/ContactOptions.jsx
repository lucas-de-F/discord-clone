/* eslint-disable react/prop-types */
import React from 'react';
import { LiComponent } from './ContactsStyle';

// eslint-disable-next-line react/prop-types
function ContactOptions({
  contacts, setHover, selected, setSelected,
}) {
  return (
    <ol>
      {contacts.map((c) => (
        <LiComponent
          key={`${c.id}Opt`}
          selected={selected.name === c.name}
          onClick={() => setSelected({ name: c.name })}
        >
          <li
            key={`${c.id}Opt-l`}
            onMouseEnter={() => setHover({ name: c.name, show: true })}
            onMouseLeave={() => setHover({ name: '', show: false })}
          >
            <div className="container">
              <div className="img-icon-fix-class">{c.icon}</div>
              <p>{c.name}</p>
            </div>
          </li>
        </LiComponent>
      ))}
    </ol>
  );
}

export default ContactOptions;
