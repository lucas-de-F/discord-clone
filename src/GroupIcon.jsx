/* eslint-disable react/prop-types */
import React from 'react';

export function GroupIcon({ children }) {
  return (
    <li className="w-11 h-11 m-2 flex bg-slate-700 items-center hover:cursor-pointer justify-center rounded-full hover:bg-cyan-500 hover:rounded-xl transition duration-300">
      {children}
    </li>
  );
}

export function GroupList({ children }) {
  return (
    <ol className="flex flex-col items-center">
      {children}
    </ol>
  );
}
