import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import styles from './footerCep.module.css';

function FooterCep() {
  const { data: { dataCep, complemento } } = useContext(Context);

  const history = useHistory();

  return (
    <div>
      <footer>
        <div className={styles.footer__div}>
          <div className={styles.footer__info__cep}>
            <p className={styles.info__cep}>
              {dataCep.logradouro}
              ,
              {' '}
              {complemento}
              {' '}
              {dataCep.bairro}
              {' '}
              -
              {' '}
              {dataCep.localidade}
              /
              {dataCep.uf}
              {' '}
              - CEP:
              {' '}
              {dataCep.cep}
            </p>
          </div>

          <button
            onClick={() => history.push('/')}
            className={styles.btn}
            type="button"
          >
            Ops, errei meu cep
          </button>
        </div>
      </footer>
    </div>
  );
}

export default FooterCep;
