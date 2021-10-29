import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import requestApi from '../../services/apiRequest';
import styles from './form.module.css';

function FormCep() {
  const { data, setData } = useContext(Context);
  const [inputName, setInputName] = useState('');
  const [inputComplemento, setInputComplemento] = useState('');
  const [inputCep, setInputCep] = useState('');
  const history = useHistory();

  async function handleOnClik() {
    history.push('/offers');
    const responseApi = await requestApi(`${inputCep}/json/`) || {};
    setData({
      ...data,
      dataCep: responseApi,
      nome: inputName,
      complemento: inputComplemento,
    });
  }

  return (
    <div className={styles.form__container}>
      <form action="">
        <h3>Digite seu nome e cep para conferir as ofertas de sua região!</h3>
        <div>
          <label htmlFor="name">
            Nome:
            {' '}
            <br />
            <input
              className={styles.input__nome}
              id="name"
              type="text"
              value={inputName}
              placeholder="Digite seu nome completo"
              onChange={({ target }) => setInputName(target.value)}
            />
          </label>

        </div>

        <div className={styles.container__cep__complemento}>
          <label htmlFor="cep">
            Cep:
            {' '}
            <br />
            <input
              className={styles.input__cep__complemento}
              id="cep"
              type="text"
              value={inputCep}
              placeholder="Ex: 95051000"
              onChange={({ target }) => setInputCep(target.value)}
            />
          </label>

          <label htmlFor="complemento">
            Complemento:
            {' '}
            <br />
            <input
              className={styles.input__cep__complemento}
              id="complemento"
              type="text"
              value={inputComplemento}
              placeholder="Ex: 100"
              onChange={({ target }) => setInputComplemento(target.value)}
            />
          </label>
        </div>

        <button
          type="button"
          onClick={handleOnClik}
          disabled={!inputCep}
        >
          Consultar
        </button>
      </form>
    </div>
  );
}

export default FormCep;
