import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import './dropDownMenu.scss';

const dropDownToggleStyle = {
  background: '#689bb0',
  padding: '8px',
  'border-radius': '13px',
  margin: 'auto',
};

const dropdownMenuStyle = {
  'border-radius': '20px',
  position: 'absolute',
  overflow: 'auto',
  maxHeight: '300px',
  width: '100vw',
  background: 'transparent',
  left: '0%',
}

const SelectDateDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      
      <div className='DropdownToggleContainer'>
        <DropdownToggle
          caret
          tag="span"
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}
        >
          Selecione a data
        </DropdownToggle>
      </div>
      <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: (data) => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: 'auto',
                    maxHeight: '300px',
                    width: '200px'
                  },
                };
              },
            },
          }}>
        <div className='dropDownContentContainer'>
          <div className='dropDownContent' onClick={toggle}>04/07/2020</div>
          <div className='dropDownContent' onClick={toggle}>27/06/2020</div>
          <div className='dropDownContent' onClick={toggle}>20/06/2020</div>
          <div className='dropDownContent' onClick={toggle}>13/06/2020</div>
          <div className='dropDownContent' onClick={toggle}>06/06/2020</div>
          <div className='dropDownContent' onClick={toggle}>30/05/2020</div>
          <div className='dropDownContent' onClick={toggle}>23/05/2020</div>
          <div className='dropDownContent' onClick={toggle}>16/05/2020</div>
          <div className='dropDownContent' onClick={toggle}>09/05/2020</div>
          <div className='dropDownContent' onClick={toggle}>02/05/2020</div>
          <div className='dropDownContent' onClick={toggle}>25/04/2020</div>
          <div className='dropDownContent' onClick={toggle}>18/04/2020</div>
          <div className='dropDownContent' onClick={toggle}>11/04/2020</div>
          <div className='dropDownContent' onClick={toggle}>04/04/2020</div>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

const SelectProducerDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <div className='DropdownToggleContainer'>
        <DropdownToggle
          caret
          tag="span"
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}

          style={dropDownToggleStyle}
        >
        Produtor(a)
          
        </DropdownToggle>
      </div>
      <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: (data) => {
                return {
                  ...data,
                  styles: {
                    ...data.styles
                  },
                };
              },
            },
          }}
          style={dropdownMenuStyle}>
        <div className='dropDownContent' onClick={toggle}>Todos</div>
        <div className='dropDownContent' onClick={toggle}>Rose Amarandi</div>
        <div className='dropDownContent' onClick={toggle}>Lilian Pedroso</div>
        <div className='dropDownContent' onClick={toggle}>Cecília Teixeira</div>
        <div className='dropDownContent' onClick={toggle}>Margarida Serena</div>
        <div className='dropDownContent' onClick={toggle}>Joaquim Genésio</div>
        <div className='dropDownContent' onClick={toggle}>Pedro Novalle</div>
        <div className='dropDownContent' onClick={toggle}>Mariana Rosa</div>
        <div className='dropDownContent' onClick={toggle}>José Gomes</div>
        <div className='dropDownContent' onClick={toggle}>Lucas Silva</div>
        <div className='dropDownContent' onClick={toggle}>Vinícius Andrade</div>
        <div className='dropDownContent' onClick={toggle}>Arlindo Rosetta</div>
        <div className='dropDownContent' onClick={toggle}>Orlando Marauá</div>
        <div className='dropDownContent' onClick={toggle}>Nina Malala</div>
      </DropdownMenu>
    </Dropdown>
  );
};

const SelectProductTypeDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <div className='DropdownToggleContainer'>
        <DropdownToggle
          caret
          tag="span"
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}

          style={dropDownToggleStyle}
        >
        Tipos de Produto
          
        </DropdownToggle>
      </div>
      <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: (data) => {
                return {
                  ...data,
                  styles: {
                    ...data.styles
                  },
                };
              },
            },
          }}
          style={dropdownMenuStyle}>
        <div className='dropDownContent' onClick={toggle}>Todos</div>
        <div className='dropDownContent' onClick={toggle}>Hortaliças</div>
        <div className='dropDownContent' onClick={toggle}>Processados</div>
        <div className='dropDownContent' onClick={toggle}>Grãos</div>
        <div className='dropDownContent' onClick={toggle}>Bebidas Prontas</div>
        <div className='dropDownContent' onClick={toggle}>Chás</div>
        <div className='dropDownContent' onClick={toggle}>Panc</div>
      </DropdownMenu>
    </Dropdown>
  );
};

export {
  SelectDateDropdown,
  SelectProducerDropdown,
  SelectProductTypeDropdown
};
