import React from 'react';
import { IoMdTrash } from 'react-icons/all'
import axios from 'axios';

function DeleteButton({ id }) {

  const deletePhone = async (id) => {
    const endpoint = `https://phones--melhorcom.repl.co/phone/${id}`
    const response = await axios.delete(endpoint)
    console.log(response)
  }

  return (
    <button onClick={ deletePhone } >
      <IoMdTrash />
    </button>
  )
}

export default DeleteButton;
