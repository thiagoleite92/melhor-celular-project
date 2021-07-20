import React from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

const myHeaders = {headers: { cpf: '04925787454'}}

function SaveButton({ phone, id }) {
  const location = useLocation()
  const { pathname } = location;

  const addNewPhone = async () => {
    const endpoint = 'https://phones--melhorcom.repl.co/phone';
    const response = await axios.post(endpoint, myHeaders, {data: phone})
    console.log(response);
  }

  const editPhone = async () => {
    const endpoint = `https://phones--melhorcom.repl.co/phone/${id}`;
    const response = await axios.post(endpoint, myHeaders, {data: phone})
    console.log(response);
  }

  if (pathname.includes('/new/phone')) {
    return (
      <button type="button" onClick={ addNewPhone }>
        ADICIONAR
      </button>
    )
  }

  return (
    <button type="button" onClick={ editPhone } >
      SALVAR
    </button>
  )
}

export default SaveButton;
