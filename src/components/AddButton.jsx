import React from 'react'
import { useHistory } from 'react-router';
import { HiOutlinePlus, MdSmartphone } from 'react-icons/all'

function AddButton() {
  const history = useHistory();

  return (
    <button onClick={ () => history.push('/new/phone')}>
      <HiOutlinePlus />
      <MdSmartphone />
      Adicionar
    </button>
  )
}

export default AddButton;
