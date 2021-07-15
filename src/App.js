import React from 'react';
import MelhorCelularProvider from './context/MelhorCelularProvider';
import { Table } from './components';

function App() {
  return (
    <MelhorCelularProvider>
      <Table /> 
    </MelhorCelularProvider>
  );
}

export default App;
