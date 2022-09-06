/* eslint-disable react/prop-types */
import React from 'react';

export function GroupIcon({ children }) {
  return (
    <li>
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
