import React from 'react';
import './contactInfo.scss';


const ContactInfo = (props) => {
  return(
  <div className='contactInfo'>
    <div className='tableDiv'>
      <div className='tableCellDiv'>
        <div className='contactRow'>
          <div className='logoDiv'>
            <img className='logo' src={require("../../../img/ProductsScreen/icons/facebookLogoWhite.png")}/>
          </div>
          <div className='textDiv'>{props.facebook}</div>
        </div>
      </div>
    </div>
    <div className='tableDiv'>
      <div className='tableCellDiv'>
        <div className='contactRow'>
          <div className='logoDiv'>
            <img className='logo' src={require("../../../img/ProductsScreen/icons/instagramLogoWhite.png")}/>
          </div>
          <div className='textDiv'>{props.instagram}</div>
        </div>
      </div>
    </div>
    <div className='tableDiv'>
      <div className='tableCellDiv'>
        <div className='contactRow'>
          <div className='logoDiv'>
            <img className='logo' src={require("../../../img/ProductsScreen/icons/phoneIcon.png")}/>
          </div>
          <div className='textDiv'>{props.phoneNumber}</div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ContactInfo;