/* eslint-disable react/prop-types */
import React from 'react';
import { MdClose } from 'react-icons/md';
import { LiComponent } from './ContactsStyle';

// eslint-disable-next-line react/prop-types
function ContactList({
  contacts, setHover, hover, remove, selected, setSelected,
}) {
  return (
    <ol>
      {contacts.map((c) => (
        <LiComponent
          key={`${c.id}List`}
          selected={selected.name === c.name}
          onClick={() => setSelected({ name: c.name })}
        >
          <li
            onMouseEnter={() => setHover({ name: c.name, show: true })}
            onMouseLeave={() => setHover({ name: '', show: false })}
            key={`${c.id}li`}
          >
            <div className="container">
              <img src={c.thumb} alt="" className="img-class" />
              <p>{c.name}</p>
            </div>
            {hover.show && hover.name === c.name && (
              <MdClose
                onClick={() => remove(c.id)}
                hidden={hover}
                size="1.3em"
                className="mx-2 hover:text-gray-100 hover:cursor-pointer"
              />
            )}
          </li>
        </LiComponent>
      ))}
    </ol>
  );
}

export default ContactList;
