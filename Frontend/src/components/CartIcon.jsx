// src/components/CartIcon.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CartIcon.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const CartIcon = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <div className={styles.cartIcon}>
      <i className="fas fa-shopping-cart"></i>
      {totalQuantity > 0 && <span className={styles.badge}>{totalQuantity}</span>}
    </div>
  );
};

export default CartIcon;
