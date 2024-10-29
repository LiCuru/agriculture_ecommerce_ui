import React from 'react';
import ReactstrapNavbar from '../reactstrap/navbar';
import {ProductsListNotDeletable, ProductsListDeletable} from './content/productsLists/productsLists';
import {HeaderOfNextBasket, HeaderOfCommitmentBasket, HeaderOfPastBaskets} from './headers';
import './basketScreens.scss';

const CommitmentBasketScreen = (props) => {
  return (
    <body>
      <ReactstrapNavbar/>
      <HeaderOfCommitmentBasket/>
      <ProductsListDeletable/>
    </body>
  );
};

const NextBasketScreen = (props) => {
  return (
    <body>
      <ReactstrapNavbar/>
      <HeaderOfNextBasket nextBasketDate='20/12/2020'/>
      <ProductsListNotDeletable/>
    </body>
  );
};

const PastBasketsScreen = (props) => {
  return(
    <body>
      <ReactstrapNavbar/>
      <HeaderOfPastBaskets/>
      <ProductsListNotDeletable/>
    </body>
  );
};


export {
  CommitmentBasketScreen,
  NextBasketScreen,
  PastBasketsScreen,
};