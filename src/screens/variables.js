import React from 'react';
import {ProductsListNotDeletable, ProductsListDeletable} from './content/productsLists/productsLists.js';
import {VariablesHeader} from './headers/variablesHeader';
import SalesFrame from './content/salesFrame/salesFrame.js';
import './basketScreens.scss';


  //Content is below the header
  const Content = (props) => {
    if (props.parentState.nextBasketItemsSetListContent) {
      return(
        <ProductsListNotDeletable/>
      );
    } 
    else if(!props.parentState.nextBasketItemsSetListContent && props.parentState.selectVariablesButton){
      if (!props.parentState.buyingListContent && props.parentState.buyingProductsContent){
        return(
        <SalesFrame/>
        );
      }
      else if(props.parentState.buyingListContent && !props.parentState.buyingProductsContent) {
        return(
          <div className='mainContainer'>
            <ProductsListDeletable/>
            <FinishVariablesButton/>
          </div>
        );
        }
      }
  };

  const FinishVariablesButton = () => {
    return(
      <div className='FinishVariablesButton'>
        <div className='trolleyDiv'>
          <span>
            <img className="trolleyIcon" src={require('../img/trolleyAzure.png')}/>
          </span>
        </div>
        <div>
          <span>
            <p>Finalizar</p>
          </span>
        </div>
      </div>
    )
  }
  
  class Variables extends React.Component {
    constructor(){
      super();
      this.state = {
        //buttons below the menu at the top of the header
        nextBasketButton: false,
        selectVariablesButton: true,

        //content below the header
        buyingListContent: false,
        buyingProductsContent: true,
        nextBasketItemsSetListContent: false,
      };
      this.handleTotalInNavbarClick = this.handleTotalInNavbarClick.bind(this);
      this.handleTrolleyDivClick = this.handleTrolleyDivClick.bind(this);
      this.handleNextBasketClick = this.handleNextBasketClick.bind(this);
      this.handleSelectVariablesClick = this.handleSelectVariablesClick.bind(this);
    }
  
    handleNextBasketClick(){
      this.setState({
        nextBasketItemsSetListContent: true,

        nextBasketButton: true,
        selectVariablesButton: false,
      });
    };
  
    handleSelectVariablesClick(){
      this.setState({
        nextBasketItemsSetListContent: false,

        nextBasketButton: false,
        selectVariablesButton: true,
      });
    }
  
    handleTotalInNavbarClick(){
      this.setState({
        buyingListContent: false,
        buyingProductsContent: true,
        nextBasketItemsSetListContent: false,
      });
    };
  
    handleTrolleyDivClick(){
      this.setState({
        buyingListContent: true,
        buyingProductsContent: false,
        nextBasketItemsSetListContent: false,
      });
    }
  
    render(){
      return(
        <div className='flexContainer'>
          <div className='header'>
            <VariablesHeader
              nextBasketButton = {this.state.nextBasketButton}
              selectVariablesButton = {this.state.selectVariablesButton}

              handleTotalInNavbarClick = {this.handleTotalInNavbarClick}
              handleTrolleyDivClick = {this.handleTrolleyDivClick}
              handleNextBasketClick = {this.handleNextBasketClick}
              handleSelectVariablesClick = {this.handleSelectVariablesClick}
            />
          </div>
          <div className='content'>
            <Content
              parentState={this.state}
            />
          </div>
        </div>
      );
    }
  };

  export {
    Variables
  };