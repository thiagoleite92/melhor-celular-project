import React from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

function SaveButton({ phone }) {
  const location = useLocation()
  const { pathname } = location;
  console.log(phone)

  if (pathname.includes('/new/phone')) {
    return (
      <button>
        ADICIONAR
      </button>
    )
  }

  return (
    <button>
      SALVAR
    </button>
  )
}

export default SaveButton;
