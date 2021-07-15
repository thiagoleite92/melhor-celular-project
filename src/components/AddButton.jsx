import React, { useState } from 'react'
import { HiOutlinePlus, MdSmartphone } from 'react-icons/all'

function AddButton() {

  return (
    <button>
      <HiOutlinePlus />
      <MdSmartphone />
      Adicionar
    </button>
  )
}

export default AddButton;
