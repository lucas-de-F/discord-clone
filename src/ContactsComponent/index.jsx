import React from 'react';
import ButtonTop from './ButtonTop';
import Contacts from './Contacts';

export default function ContactsComponents() {
  return (
    <div className="w-[250px] min-w-[250px] bg-gray-700">
      <div className="h-full scrollbar-thin scrollbar-thumb-gray-800 scrollbar-thumb-rounded-2xl scrollbar-track-gray-500">
        <ButtonTop />
        <Contacts />
      </div>
    </div>
  );
}
