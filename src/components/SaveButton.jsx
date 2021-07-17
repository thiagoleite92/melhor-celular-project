import React from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

const myHeaders = {headers: { cpf: '04925787454'}}

function SaveButton({ phone }) {
  const location = useLocation()
  const { pathname } = location;

  const addNewPhone = async () => {
    const endpoint = 'https://phones--melhorcom.repl.co/phone';
    const response = await axios.post(endpoint, {headers: {cpf: '04925787454', data: phone}})
    console.log(response);
  }

  if (pathname.includes('/new/phone')) {
    return (
      <button type="submit" onClick={ addNewPhone }>
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
