import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { handleRemoveItem, product } = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className="item-details">
                <div className="item-name">
                    <h3 title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h3>
                    <p>Price: <span style={{ color: "orange" }}>{price}</span></p>
                    <p><small>Shipping cost: <span style={{ color: "orange" }}>{shipping}</span></small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-btn">
                    <button onClick={() => handleRemoveItem(product)} className='btn'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;