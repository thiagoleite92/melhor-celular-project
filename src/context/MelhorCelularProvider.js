import MelhorCelularContext from './MelhorCelularContext';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



const myHeaders = {headers: { cpf: '04925787454'}}


function MelhorCelularProvider({ children }) {
  const [phoneList, setPhoneList] = useState([]);
  const [headers] = useState([
    'Codigo', 'Modelo', 'Preço', 'Marca', 'Cor' 
  ])

  useEffect(() => {
    const fetchPhoneList = async () => {
      const endpoint = 'https://phones--melhorcom.repl.co/phone';
      const  { data } = await axios.get(endpoint, myHeaders)
      setPhoneList(data)
      console.log(data)
    }
    fetchPhoneList();
  }, [])

  const toConsume = {
    phoneList,
    headers,
  }

  return (
    <MelhorCelularContext.Provider value={ toConsume }>
      {children}
    </MelhorCelularContext.Provider>
  )
}

export default MelhorCelularProvider;
