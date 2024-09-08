// src/App.jsx
import React from 'react';
import ItemList from './components/ItemList';
import CartIcon from './components/CartIcon';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Shopping Cart</h1>
        <CartIcon />
      </header>
      <main>
        <ItemList />
      </main>
    </div>
  );
};

export default App;
