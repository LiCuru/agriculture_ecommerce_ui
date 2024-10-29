import React from 'react';
import ReactDOM from 'react';
import ReactstrapNavbar from '../reactstrap/navbar';
import {HeaderForNotDeletableRow, HeaderForDeletableRow} from './content/productsLists/rows';
import {SelectProducerDropdown, SelectProductTypeDropdown} from '../reactstrap/dropDownMenu'
import {SelectDateDropdown} from '../reactstrap/dropDownMenu'
import './headers.scss';


const HeaderOfNextBasket = (props) => {
  return(
    <div className="header">
      <div className='navbarUnderlyingGap'></div>

      <div className='titleGap'>
        <div className='title'>
          <span>Próxima cesta: {props.nextBasketDate}</span>
        </div>
      </div>

      <HeaderForNotDeletableRow/>
    </div>
  );
};

const HeaderOfCommitmentBasket = (props) => {
  return(
    <div className="header">
      <div className='navbarUnderlyingGap'></div>

      <div className='titleGap'>
        <div className='title'>
          <span>Cesta de Compromisso</span>
        </div>

        <div className='options'>
          <div><span>Semanal</span></div>
          <div  className='selected'><span>Quinzenal</span></div>
          <div><span>Mensal</span></div>
        </div>
      </div>

      <div className='variablesSubMenu'>
        <div className='currentBasket'><span>Ver Cesta Atual</span></div>
        <div className=''>
          <div className="buttonsOnTheRight">
              <div className="TotalInNavbar">
                  <p>13 produtos</p>
                  <p>R$ 101,00</p>
              </div>
              <div className='trolleyDiv'>
                <img className="trolleyIcon" src={require('../img/trolleyAzure.png')}/>
              </div>
          </div>
        </div>
        
      </div>

      <HeaderForDeletableRow/>
    </div>
  );
};

const HeaderOfPastBaskets = (props) => {
  return(
    <div className="header">
      <div className='navbarUnderlyingGap'></div>

      <div className='titleGap'>
        <div className='title'>
          <span>Histórico de Cestas</span>
        </div>
        <div className='title'>
          <div className='drowDownContainer'>
            <SelectDateDropdown/>
          </div>
        </div>
      </div>

      <div className='options'>
        <div className='basketDate'><span>05 Dez 2020</span></div>
      </div>

      <HeaderForNotDeletableRow/>
    </div>
  );
};

export {
  HeaderOfNextBasket,
  HeaderOfCommitmentBasket,
  HeaderOfPastBaskets,
};