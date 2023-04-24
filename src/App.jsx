import './App.css';
import React from 'react';
import Home from './Home';
import GlobalProvider from './components/GlobalProvider';

export default function App() {

  return (
    <GlobalProvider>
      <Home></Home>
    </GlobalProvider>
  );
}
