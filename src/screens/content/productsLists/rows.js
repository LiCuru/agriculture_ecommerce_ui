import React from 'react';
import './rows.scss'

const HeaderForDeletableRow = (props) => {
  return(
      <div className="itemRow">
          <div className="itemInfoDiv">
              <span>Produto</span>
          </div>
          <div className="itemInfoDiv">
              <span>porção</span>
          </div>
          <div className="itemInfoDiv">
              <span>R$ por porção</span>
          </div>
          <div className="itemInfoDiv">
              <span>QTD</span>
          </div>
          <div className="itemInfoDiv">
              <span>R$ total</span>
          </div>
          <div className="itemInfoDiv">
              <span>  </span>
          </div>
      </div>
  );
};

const HeaderForNotDeletableRow = (props) => {
  return(
      <div className="itemRow">
          <div className="itemInfoDiv">
              <span>Produto</span>
          </div>
          <div className="itemInfoDiv">
              <span>porção</span>
          </div>
          <div className="itemInfoDiv">
              <span>R$ por porção</span>
          </div>
          <div className="itemInfoDiv">
              <span>QTD</span>
          </div>
          <div className="itemInfoDiv">
              <span>R$ total</span>
          </div>
      </div>
  );
};

const DeletableRow = (props) => {
  return(
      <div className="itemRow">
          <div className="itemInfoDiv">
              <span>{props.itemName}</span>
          </div>
          <div className="itemInfoDiv">
              <span>{props.itemPortion}</span>
          </div>
          <div className="itemInfoDiv">
              <span>{props.itemPrice}</span>
          </div>
          <div className="itemInfoDiv">
              <span>{props.chosenQuantity}</span>
          </div>
          <div className="itemInfoDiv">
              <span>{props.totalItemPrice}</span>
          </div>
          <div className="itemInfoDiv">
              <span>X</span>
          </div>
      </div>
  );
};

const NotDeletableRow = (props) => {
  return(
      <div className="itemRow">
          <div className="itemInfoDiv">
              <span>{props.itemName}</span>
          </div>
          <div className="itemInfoDiv">
              <span>{props.itemPortion}</span>
          </div>
          <div className="itemInfoDiv">
              <span>{props.itemPrice}</span>
          </div>
          <div className="itemInfoDiv">
              <span>{props.chosenQuantity}</span>
          </div>
          <div className="itemInfoDiv">
              <span>{props.totalItemPrice}</span>
          </div>
      </div>
  );
};

const DeletableTotalRow = (props) => {
  return(
      <div className="itemRow">
          <div className="itemInfoDiv">
              <span></span>
          </div>
          <div className="itemInfoDiv">
              <span></span>
          </div>
          <div className="itemInfoDiv">
              <span></span>
          </div>
          <div className="itemInfoDiv">
              <span>TOTAL</span>
          </div>
          <div className="itemInfoDiv">
              <span>{props.totalPrice}</span>
          </div>
          <div className="itemInfoDiv">
              <span></span>
          </div>
      </div>
  );
};

const NotDeletableTotalRow = (props) => {
  return(
      <div className="itemRow">
          <div className="itemInfoDiv">
              <span></span>
          </div>
          <div className="itemInfoDiv">
              <span></span>
          </div>
          <div className="itemInfoDiv">
              <span></span>
          </div>
          <div className="itemInfoDiv">
              <span>TOTAL</span>
          </div>
          <div className="itemInfoDiv">
              <span>{props.totalPrice}</span>
          </div>
      </div>
  );
};

export {
  HeaderForDeletableRow,
  HeaderForNotDeletableRow,

  DeletableRow,
  NotDeletableRow,

  DeletableTotalRow,
  NotDeletableTotalRow
};