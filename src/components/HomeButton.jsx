import React from 'react';
import { useHistory } from 'react-router';

function HomeButton() {
  const history = useHistory();

  return (
    <button
      onClick={ () => history.push('/')}
    >
      VOLTAR</button>
  )
}

export default HomeButton;
