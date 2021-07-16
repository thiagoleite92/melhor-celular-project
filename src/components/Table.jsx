import React from 'react';
import { TableBody, TableHeader, AddButton } from './index';

function Table() {
  return (
   <section> 
    <div>
      <span>Produtos</span>
      <AddButton />
    </div>
    <table>
      <TableHeader />
      <TableBody />
    </table>
  </section>
  )
}

export default Table;