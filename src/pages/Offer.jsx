import React from 'react';
import BoasVindasCcliente from '../components/boasVindas/BoasVindasCliente';
import Cards from '../components/CardsOffers/Cards';
import Header from '../components/header/Header';
import FooterCep from '../components/infoCep/FooterCep';

function Offer() {
  return (
    <div>
      <Header />
      <BoasVindasCcliente />
      <Cards />
      <FooterCep />
    </div>
  );
}

export default Offer;
