import React from 'react';
import './productAvatar.scss';

const ProductAvatar = (props) => {

  let speciesPicture = props.speciesPicture;

  return(
    <div className="productAvatar">
      <div className="productImage"  style={{'background-image': 'url('+require("../../../img/ProductsScreen/photos/plantsByScientificName/"+speciesPicture+"/Principal.jpg")+')'}}></div>
      <div className="productDescription">
        <p className="productName">{props.name}</p>
        <p className="productDetail">{props.portion}</p>
        <p className="productDetail">R$ {props.price}</p>
      </div>
      <div className="setOfQuantityButtons">
        <div className="quantityButton">
          <p>-</p>
        </div>
        <div className="quantityDisplayer">
          <p>0</p>
        </div>
        <div className="quantityButton">
          <p>+</p>
        </div>
      </div>
    </div>
  )
}

export default ProductAvatar;