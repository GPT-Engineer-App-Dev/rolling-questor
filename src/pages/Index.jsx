import React from 'react';
import DiceRoller from '../components/DiceRoller/DiceRoller';
import styles from './Index.module.css';

const Index = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Virtual Dice Roller</h1>
      <p className={styles.subtitle}>Roll the dice for your tabletop adventures!</p>
      <DiceRoller />
    </div>
  );
};

export default Index;