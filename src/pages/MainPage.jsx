import React from 'react';
import MelhorCelularProvider from '../context/MelhorCelularProvider';
import { Header, Table } from '../components';

function MainPage() {
  return (
    <>
    <Header />
    <MelhorCelularProvider>
      <Table /> 
    </MelhorCelularProvider>
    </>
  );
}

export default MainPage;
