import React from 'react';
import {
    HeaderForDeletableRow,
    HeaderForNotDeletableRow,
  
    DeletableRow,
    NotDeletableRow,
  
    DeletableTotalRow,
    NotDeletableTotalRow
} from './rows.js';

const ProductsListDeletable = (props) => {
  return(
      <div>
          <DeletableRow
              itemName='Jatobá'
              itemPortion='250g'
              itemPrice='R$ 5,00'
              chosenQuantity='1'
              totalItemPrice='R$ 5,00'
          />
          <DeletableRow
              itemName='Acerola'
              itemPortion='250g'
              itemPrice='R$ 10,00'
              chosenQuantity='1'
              totalItemPrice='R$ 20,00'
          />
          {/* <DeletableRow
              itemName='Queijo Frescal'
              itemPortion='500 g'
              itemPrice='R$ 5,00'
              chosenQuantity='1'
              totalItemPrice='R$ 5,00'
          />
          <DeletableRow
              itemName='Polpa de cagaita'
              itemPortion='250g'
              itemPrice='R$ 7,00'
              chosenQuantity='1'
              totalItemPrice='R$ 7,00'
          />
          <DeletableRow
              itemName='Vinho colonial'
              itemPortion='1 L'
              itemPrice='R$ 20,00'
              chosenQuantity='1'
              totalItemPrice='R$ 20,00'
          />
          <DeletableRow
              itemName='Babosa'
              itemPortion='250g'
              itemPrice='R$ 10,00'
              chosenQuantity='1'
              totalItemPrice='R$ 10,00'
          />
          <DeletableRow
              itemName='Jatobá'
              itemPortion='250g'
              itemPrice='R$ 5,00'
              chosenQuantity='1'
              totalItemPrice='R$ 5,00'
          /> 
          <DeletableRow
              itemName='Jatobá'
              itemPortion='250g'
              itemPrice='R$ 5,00'
              chosenQuantity='1'
              totalItemPrice='R$ 5,00'
          />
          <DeletableRow
              itemName='Acerola'
              itemPortion='250g'
              itemPrice='R$ 10,00'
              chosenQuantity='1'
              totalItemPrice='R$ 20,00'
          />
          <DeletableRow
              itemName='Queijo Frescal'
              itemPortion='500 g'
              itemPrice='R$ 5,00'
              chosenQuantity='1'
              totalItemPrice='R$ 5,00'
          />
          <DeletableRow
              itemName='Polpa de cagaita'
              itemPortion='250g'
              itemPrice='R$ 7,00'
              chosenQuantity='1'
              totalItemPrice='R$ 7,00'
          />
          <DeletableRow
              itemName='Vinho colonial'
              itemPortion='1 L'
              itemPrice='R$ 20,00'
              chosenQuantity='1'
              totalItemPrice='R$ 20,00'
          />
          <DeletableRow
              itemName='Babosa'
              itemPortion='250g'
              itemPrice='R$ 10,00'
              chosenQuantity='1'
              totalItemPrice='R$ 10,00'
          />
          <DeletableRow
              itemName='Jatobá'
              itemPortion='250g'
              itemPrice='R$ 5,00'
              chosenQuantity='1'
              totalItemPrice='R$ 5,00'
          /> */}
          <DeletableTotalRow
              totalPrice='R$ 101,00'    
          />
      </div>
  );
};

const ProductsListNotDeletable = (props) => {
  return(
      <div className='gathereditemRows'>
          <NotDeletableRow
              itemName='Jatobá'
              itemPortion='250g'
              itemPrice='R$ 5,00'
              chosenQuantity='1'
              totalItemPrice='R$ 5,00'
          />
          <NotDeletableRow
              itemName='Acerola'
              itemPortion='250g'
              itemPrice='R$ 10,00'
              chosenQuantity='1'
              totalItemPrice='R$ 20,00'
          />
          <NotDeletableRow
              itemName='Queijo Frescal'
              itemPortion='500 g'
              itemPrice='R$ 5,00'
              chosenQuantity='1'
              totalItemPrice='R$ 5,00'
          />
          <NotDeletableRow
              itemName='Polpa de cagaita'
              itemPortion='250g'
              itemPrice='R$ 7,00'
              chosenQuantity='1'
              totalItemPrice='R$ 7,00'
          />
          <NotDeletableRow
              itemName='Vinho colonial'
              itemPortion='1 L'
              itemPrice='R$ 20,00'
              chosenQuantity='1'
              totalItemPrice='R$ 20,00'
          />
          <NotDeletableRow
              itemName='Babosa'
              itemPortion='250g'
              itemPrice='R$ 10,00'
              chosenQuantity='1'
              totalItemPrice='R$ 10,00'
          />
          <NotDeletableRow
              itemName='Jatobá'
              itemPortion='250g'
              itemPrice='R$ 5,00'
              chosenQuantity='1'
              totalItemPrice='R$ 5,00'
          /> 
          <NotDeletableRow
              itemName='Jatobá'
              itemPortion='250g'
              itemPrice='R$ 5,00'
              chosenQuantity='1'
              totalItemPrice='R$ 5,00'
          />
          <NotDeletableRow
              itemName='Acerola'
              itemPortion='250g'
              itemPrice='R$ 10,00'
              chosenQuantity='1'
              totalItemPrice='R$ 20,00'
          />
          <NotDeletableRow
              itemName='Queijo Frescal'
              itemPortion='500 g'
              itemPrice='R$ 5,00'
              chosenQuantity='1'
              totalItemPrice='R$ 5,00'
          />
          <NotDeletableRow
              itemName='Polpa de cagaita'
              itemPortion='250g'
              itemPrice='R$ 7,00'
              chosenQuantity='1'
              totalItemPrice='R$ 7,00'
          />
          <NotDeletableRow
              itemName='Vinho colonial'
              itemPortion='1 L'
              itemPrice='R$ 20,00'
              chosenQuantity='1'
              totalItemPrice='R$ 20,00'
          />
          <NotDeletableRow
              itemName='Babosa'
              itemPortion='250g'
              itemPrice='R$ 10,00'
              chosenQuantity='1'
              totalItemPrice='R$ 10,00'
          />
          <NotDeletableRow
              itemName='Jatobá'
              itemPortion='250g'
              itemPrice='R$ 5,00'
              chosenQuantity='1'
              totalItemPrice='R$ 5,00'
          />
          <NotDeletableTotalRow
              totalPrice='R$ 101,00'    
          />
      </div>
  );
};

export {
    ProductsListDeletable,
    ProductsListNotDeletable
};