import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState({
    dataCep: [],
    nome: '',
    complemento: '',
  });

  const objContext = {
    data,
    setData,
  };

  return (
    <Context.Provider value={objContext}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
