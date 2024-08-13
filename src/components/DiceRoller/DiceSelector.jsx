import React from 'react';
import styles from './DiceSelector.module.css';

const diceTypes = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'];

const DiceSelector = ({ addDie }) => {
  return (
    <div className={styles.diceSelector}>
      {diceTypes.map((dieType) => (
        <button
          key={dieType}
          onClick={() => addDie(dieType)}
          className={styles.dieButton}
        >
          {dieType}
        </button>
      ))}
    </div>
  );
};

export default DiceSelector;