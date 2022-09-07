import React, { useState } from 'react';
import styledComponents from 'styled-components';
import tw from 'twin.macro';
import { MdClose } from 'react-icons/md';
import finalSpaceCharacters from '../sideBar/data';

const ContactsStyle = styledComponents.div`
    ${tw`w-[250px] min-w-[250px] bg-gray-700 pb-12`}

    li {
        ${tw` py-1 flex flex-row items-center justify-between text-gray-400 rounded-md mx-2 my-0.5`}
    }

    li:hover {
        ${tw`text-gray-300 bg-gray-600`}
    }
    div {
        ${tw`mx-2 flex flex-row items-center`}
    }
    p {
        ${tw`mx-2`}
    }

    img {
        ${tw`w-9 h-9 flex bg-gray-600 items-center justify-center rounded-full`}
    }
`;

export default function Contacts() {
  const [hover, setHover] = useState({ name: '', show: false });
  const remove = (id) => {
    setHover({ name: '', show: false });
    const index = finalSpaceCharacters.findIndex((c) => c.id === id);
    finalSpaceCharacters.splice(index, 1);
  };
  return (
    <ContactsStyle>
      <ol>
        {finalSpaceCharacters.map((c) => (
          <li
            onMouseEnter={() => setHover({ name: c.name, show: true })}
            onMouseLeave={() => setHover({ name: '', show: false })}
          >
            <div>
              <img src={c.thumb} alt="" />
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
        ))}
      </ol>
    </ContactsStyle>
  );
}
