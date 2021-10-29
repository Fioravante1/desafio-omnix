import React, { useContext } from 'react';
import styles from './boasVindas.module.css';
import Context from '../../context/Context';

function BoasVindasCcliente() {
  const { data: { nome } } = useContext(Context);
  return (
    <div className={styles.container__boas__vindas}>
      {
        nome ? (
          <p className={styles.boas__vindas__cliente}>
            Olá
            {' '}
            {nome}
            , confira as ofertas disponiveis para sua região!
          </p>
        )
          : null
      }
    </div>
  );
}

export default BoasVindasCcliente;
