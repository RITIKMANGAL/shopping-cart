// src/components/Item.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import { removeItemFromCart } from '../redux/cartSlice';
import styles from './Item.module.css';

const Item = ({ id, name, image, price }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.items.find((item) => item.id === id));

  const addToCartHandler = () => {
    dispatch(addItemToCart({ id, name, image, price }));
  };

  const removeFromCartHandler = () => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className={styles.item}>
      <img src={image} alt={name} className={styles.image} />
      <h3>{name}</h3>
      <p>${price}</p>
      {!item ? (
        <button onClick={addToCartHandler} className={styles.addToCartButton}>
          Add to Cart
        </button>
      ) : (
        <div className={styles.quantityControls}>
          <button onClick={removeFromCartHandler}>-</button>
          <span>{item.quantity}</span>
          <button onClick={addToCartHandler}>+</button>
        </div>
      )}
    </div>
  );
};

export default Item;