import React from 'react';
import ReactstrapNavbar from '../reactstrap/navbar';
import {ItemsListNotDeletable} from './content/productsLists/productsLists';
import {HeaderNextBasket} from './headers';
// import '../App.scss';

const NextBasketScreen = (props) => {
  return (
    <body>
      <ReactstrapNavbar/>
      <HeaderNextBasket nextDate='12/12/2020'/>
      <ItemsListNotDeletable/>
    </body>
  );
};

export default NextBasketScreen;