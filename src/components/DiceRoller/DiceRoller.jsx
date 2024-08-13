import React, { useState } from 'react';
import styles from './DiceRoller.module.css';
import DiceSelector from './DiceSelector';
import RollResult from './RollResult';

const DiceRoller = () => {
  const [selectedDice, setSelectedDice] = useState([]);
  const [rollResults, setRollResults] = useState([]);

  const addDie = (dieType) => {
    setSelectedDice([...selectedDice, dieType]);
  };

  const removeDie = (index) => {
    const newSelectedDice = [...selectedDice];
    newSelectedDice.splice(index, 1);
    setSelectedDice(newSelectedDice);
  };

  const rollDice = () => {
    const results = selectedDice.map((dieType) => {
      const sides = parseInt(dieType.slice(1));
      return Math.floor(Math.random() * sides) + 1;
    });
    setRollResults(results);
  };

  const clearDice = () => {
    setSelectedDice([]);
    setRollResults([]);
  };

  return (
    <div className={styles.diceRoller}>
      <DiceSelector addDie={addDie} />
      <div className={styles.selectedDice}>
        {selectedDice.map((die, index) => (
          <div key={index} className={styles.selectedDie}>
            {die}
            <button onClick={() => removeDie(index)} className={styles.removeDie}>
              ×
            </button>
          </div>
        ))}
      </div>
      <div className={styles.actions}>
        <button onClick={rollDice} className={styles.rollButton} disabled={selectedDice.length === 0}>
          Roll Dice
        </button>
        <button onClick={clearDice} className={styles.clearButton}>
          Clear All
        </button>
      </div>
      <RollResult results={rollResults} />
    </div>
  );
};

export default DiceRoller;