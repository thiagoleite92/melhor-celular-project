import React, { useState } from 'react'
import MelhorCelularContext from '../context/MelhorCelularContext';
import { DeleteButton, EditButton } from './index';

function renderTableBody(phoneList) { 
  return (
    <tbody>
      {
        phoneList.map(({ code, model, price, brand, color, _id }, key) =>
        (
          <tr key={ key }>
            <td>{code}</td>
            <td>{model}</td>
            <td>{`R$ ${price}`}</td>
            {
              brand === 'Sansung' 
              ? <td>{'Samsung'}</td> 
              : <td>{brand}</td>
            }
            <td>{color.replace('LACK', 'lack')}</td>
            <td><EditButton id={ _id } /></td>
            <td><DeleteButton id={ _id } /></td>
          </tr>
        )
        )
      }
    </tbody>
  )

}

const TableBody = () => {
  return (
    <MelhorCelularContext.Consumer>
      {
        ({ phoneList }) => renderTableBody(phoneList)
      }
    </MelhorCelularContext.Consumer>
  )
}

export default TableBody;
