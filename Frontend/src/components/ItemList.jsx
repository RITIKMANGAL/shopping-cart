// src/components/ItemList.jsx
import React from 'react';
import Item from './Item';
import styles from './ItemList.module.css';
import { items } from '../data.js'; // Importing the items data

const ItemList = () => {
  return (
    <div className={styles.itemList}>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ItemList;
