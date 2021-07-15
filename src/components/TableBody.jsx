import React from 'react'
import MelhorCelularContext from '../context/MelhorCelularContext';
import { DeleteButton, EditButton } from './index';

function renderTableBody(phoneList) {
  return (
    <tbody>
      {
        phoneList.map(({ code, model, price, brand, color }, key) =>
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
            <td><EditButton /></td>
            <td><DeleteButton /></td>
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
