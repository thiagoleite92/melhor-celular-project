import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditPhoneForm({ id }) {
  const history = useHistory();

  const [phone, setPhone] = useState([])

  useEffect(() => {
    const fetchPhone = async () => {
      const endpoint = `https://phones--melhorcom.repl.co/phone/${id}`;
      const { data } = await axios.get(endpoint, {headers: { cpf: '04925787454'}});
      setPhone(data)
    }
    fetchPhone();
  }, [id])

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPhone((oldState) => ({
      ...oldState,
      [name]: value,
    }))
  }

  // console.log(phone)
  console.log(phone)

  if (phone.length === 0) {
    return (<span>Carregando...</span>)
  }

  return (
    <>
      <form action="">
        <label htmlFor="">
          Modelo
          <input
            type="text"
            value={ phone.model }
            onChange={  handleChange }
            name="model" />
        </label>
        <label htmlFor="">
          Marca
          <input
            type="text"
            value={ phone.brand }
            onChange={ handleChange }
            name="brand" />
        </label>
        <label htmlFor="">
          Cor
          <input 
            type="text"
            value={ phone.color }
            onChange={ handleChange }
            name="color" />
        </label>
        <label htmlFor="">
          Preço
          <input 
            type="text"
            value={ phone.price }
            onChange={ handleChange }
            name="price" />
        </label>
        <label htmlFor="">
          Ínicio das vendas
          <input 
            type="text"
            value={ phone.date }
            onChange={ handleChange }
            name="date" />
        </label>
        <label htmlFor="">
          Fim das vendas
          <input 
            type="text"
            value={ phone.endDate }
            onChange={ handleChange }
            name="endDate" />
        </label>
      </form>
      <div>
        <button>voltar</button>
        <button>salvar</button>
      </div>
    </>
  )
}

export default EditPhoneForm;
