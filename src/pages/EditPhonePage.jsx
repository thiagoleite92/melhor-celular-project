import React from 'react';
import { useParams } from 'react-router';
import { EditPhoneForm } from '../components/'

function EditPage() {
  const params = useParams()
  const { id } = params;


  return (
    <EditPhoneForm id={ id } />
  )
}

export default EditPage;
