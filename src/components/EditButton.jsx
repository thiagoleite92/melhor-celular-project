import React from 'react';
import { useHistory } from 'react-router';
import { MdEdit } from 'react-icons/all'

function EditButton({ id }) {
  const history = useHistory();  

  return (
    <button onClick={ () => history.push(`/edit/${ id }`) }>
      <MdEdit />
    </button>
  )
}

export default EditButton;
