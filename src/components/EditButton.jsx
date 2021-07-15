import React, { useState } from 'react';
import { MdEdit } from 'react-icons/all'
import { Redirect } from 'react-router-dom';

function EditButton() {
  const [redirect, setRedirect] = useState(false)

  const handleRedirect = () => {
    setRedirect(true);
  }

  if(redirect) {
    return (<Redirect to="/edit" />)
  }

  return (
    <button onClick={ handleRedirect }>
      <MdEdit />
    </button>
  )
}

export default EditButton;
