import React from 'react';
import './home-page.css';

import Promo from '../../components/Promo/Promo';
import { Welcome } from '../../components/Welcome/Welcome';
import { NewsMain } from '../../components/NewsMain/NewsMain';
import { Categories } from '../../components/Categories/Categories';


export const HomePage = () => {
  return (
    <main>
      <Promo />
      <Welcome />
      <NewsMain />
      <Categories />
    </ main>
  );
};
