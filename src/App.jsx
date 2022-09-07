import React from 'react';
import './index.css';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import SideBar from './sideBar';
import ContactsComponent from './ContactsComponent';

export default function App() {
  return (
    <div className="flex h-screen w-screen flex-row">
      <SideBar />
      <Routes>
        <Route>
          <Route path="/contacts" index element={<ContactsComponent />} />
          <Route path="/" element={<Navigate to="/contacts" />} />
        </Route>
      </Routes>
      <div className="w-full bg-gray-600" />
    </div>
  );
}
