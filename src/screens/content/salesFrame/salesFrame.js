import React from 'react';
import './salesFrame.scss';
import ContactInfo from './contactInfo';
import ProductAvatar from './productAvatar';

const SalesFrame = () => {
  return(
    <div className='salesFrame'>
      <img className='profileImg'  src={require("../../../img/ProductsScreen/photos/users/face11.png")}/>
      <h3   className='profileName'>Joaquim Genésio</h3>
      <ContactInfo
        facebook = 'rede.livres.produtosdobem.bs'
        instagram = 'livresbaixadasantista'
        phoneNumber = '(13) 9 9999-9999'
      />
      <h3 className='productType'>hortaliças</h3>
      <div className='productsDiv'>
        <ProductAvatar
          speciesPicture = 'Artocarpussp'
          name = 'Fruta Pão'
          portion = '1 Kg'
          price = '3,00'
        />
        <ProductAvatar
          speciesPicture = 'Caryocarbrasiliense'
          name = 'Pequi'
          portion = '500 g'
          price = '10,00'
        />
        <ProductAvatar
          speciesPicture = 'Copaiferalangsdorffiidesf'
          name = 'Copaíba'
          portion = '300 g'
          price = '10,00'
        />
        <ProductAvatar
          speciesPicture = 'Malfigiaemarginata'
          name = 'Acerola'
          portion = '500 g'
          price = '3,00'
        />
        <ProductAvatar
          speciesPicture = 'Aloevera'
          name = 'Babosa'
          portion = '500 g'
          price = '10,00'
        />
        <ProductAvatar
          speciesPicture = 'Dipteryxalata'
          name = 'Barú'
          portion = '150 g'
          price = '15,00'
        />
        <ProductAvatar
          speciesPicture = 'Eugeniadysenterica'
          name = 'Cagaita'
          portion = '500 g'
          price = '12,00'
        />
        <ProductAvatar
          speciesPicture = 'Hymenaeacourbaril'
          name = 'Jatobá'
          portion = '500 g'
          price = '15,00'
        />
        <ProductAvatar
          speciesPicture = 'Tamarindusindical'
          name = 'Tamarindo'
          portion = '300 g'
          price = '17,00'
        />
        <ProductAvatar
          speciesPicture = 'Malfigiaemarginata'
          name = 'Acerola'
          portion = '300 g'
          price = '17,00'
        />
        <ProductAvatar
          speciesPicture = 'Aloevera'
          name = 'Babosa'
          portion = '500 g'
          price = '10,00'
        />
        <ProductAvatar
          speciesPicture = 'Dipteryxalata'
          name = 'Barú'
          portion = '150 g'
          price = '15,00'
        />
        <ProductAvatar
          speciesPicture = 'Eugeniadysenterica'
          name = 'Cagaita'
          portion = '500 g'
          price = '12,00'
        />
        <ProductAvatar
          speciesPicture = 'Hymenaeacourbaril'
          name = 'Jatobá'
          portion = '500 g'
          price = '15,00'
        />
      </div>
      <h3   className="productType">bebidas</h3>
      <div className='productsDiv'>
        <ProductAvatar
            speciesPicture = 'Artocarpussp'
            name = 'Fruta Pão'
            portion = '1 Kg'
            price = '3,00'
          />
          <ProductAvatar
            speciesPicture = 'Caryocarbrasiliense'
            name = 'Pequi'
            portion = '500 g'
            price = '10,00'
          />
          <ProductAvatar
            speciesPicture = 'Copaiferalangsdorffiidesf'
            name = 'Copaíba'
            portion = '300 g'
            price = '10,00'
          />
          <ProductAvatar
            speciesPicture = 'Malfigiaemarginata'
            name = 'Acerola'
            portion = '500 g'
            price = '3,00'
          />
          <ProductAvatar
            speciesPicture = 'Aloevera'
            name = 'Babosa'
            portion = '500 g'
            price = '10,00'
          />
          <ProductAvatar
            speciesPicture = 'Dipteryxalata'
            name = 'Barú'
            portion = '150 g'
            price = '15,00'
          />
          <ProductAvatar
            speciesPicture = 'Eugeniadysenterica'
            name = 'Cagaita'
            portion = '500 g'
            price = '12,00'
          />
          <ProductAvatar
            speciesPicture = 'Hymenaeacourbaril'
            name = 'Jatobá'
            portion = '500 g'
            price = '15,00'
          />
          <ProductAvatar
            speciesPicture = 'Tamarindusindical'
            name = 'Tamarindo'
            portion = '300 g'
            price = '17,00'
          />
          <ProductAvatar
            speciesPicture = 'Malfigiaemarginata'
            name = 'Acerola'
            portion = '300 g'
            price = '17,00'
          />
          <ProductAvatar
            speciesPicture = 'Aloevera'
            name = 'Babosa'
            portion = '500 g'
            price = '10,00'
          />
          <ProductAvatar
            speciesPicture = 'Dipteryxalata'
            name = 'Barú'
            portion = '150 g'
            price = '15,00'
          />
      </div>
    </div>
  );
};

export default SalesFrame;