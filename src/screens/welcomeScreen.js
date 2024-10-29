import React from 'react';
import ReactstrapNavbar from '../reactstrap/navbar';
import './welcomeScreen.scss';

const WelcomeScreen = (props) => {
  return(
    <body>
      <ReactstrapNavbar/>
      <div className='thanksImage'>
        <div className='darkOverlay'>
          <div className='mainContainer'>
            <div className='messageContainer'>
                Obrigada por fazer parte e contribuir para a agroecologia.
            </div>
            <div className='optionsGrid'>
              <div className='userOption'><span>Variáveis & Próxima Cesta</span></div>
              <div className='userOption'><span>Pedir Uma Cesta Avulsa</span></div>
              <div className='userOption'><span>Cesta Periódica</span></div>
              <div className='userOption'><span>Histórico de Cestas</span></div>
              <div className='userOption'><span>Meu Perfil</span></div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default WelcomeScreen;