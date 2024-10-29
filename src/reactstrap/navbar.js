import React, { useState } from 'react';  
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './reactstrapStuff.scss';

const ReactstrapNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="reactstrapNavbar">
      <Navbar color="dark" dark fixed expand="md">
        <NavbarBrand href="/" className="text-light">Livres B. Santista</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/" className="text-light">Variáveis</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="text-light">Pedidos Extras</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="text-light">Cesta Avulsa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="text-light">Cesta Periódica</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="text-light">Histórico de Cestas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="text-light">Meu Perfil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="text-light">Sair</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default ReactstrapNavbar;
