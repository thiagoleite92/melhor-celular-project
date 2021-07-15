import React from 'react'
import MelhorCelularContext from '../context/MelhorCelularContext';

function renderTableHeader(headers) {
  return (
   <thead>
    <tr>
      {
        headers.map((head, key) => <th key={ key }>{head}</th> )
      }
    </tr>
  </thead> 
  )
  
}

const TableHeader = () => {
  return (
    <MelhorCelularContext.Consumer>
      {
        ( { headers }) => renderTableHeader(headers)
      }
    </MelhorCelularContext.Consumer>
  )
}

export default TableHeader;
