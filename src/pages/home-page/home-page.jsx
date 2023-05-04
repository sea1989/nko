import React from 'react';
import './home-page.css';

import Promo from '../../components/Promo/Promo';
import { Welcome } from '../../components/Welcome/Welcome';
import { NewsMain } from '../../components/NewsMain/NewsMain';
import { Categories } from '../../components/Categories/Categories';
import { Calendar } from '../../components/Calendar/Calendar';
import { NewNKO } from '../../components/NewNKO/NewNKO';


export const HomePage = () => {
  return (
    <main>
      <Promo />
      <Welcome />
      <NewsMain />
      <Categories />
      <Calendar />
      <NewNKO />
    </ main>
  );
};
