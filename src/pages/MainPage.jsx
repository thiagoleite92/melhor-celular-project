import React from 'react';
import MelhorCelularProvider from '../context/MelhorCelularProvider';
import { Table } from '../components';

function MainPage() {
  return (
    <MelhorCelularProvider>
      <Table /> 
    </MelhorCelularProvider>
  );
}

export default MainPage;
