import React from 'react';
import styles from './RollResult.module.css';

const RollResult = ({ results }) => {
  if (results.length === 0) return null;

  const total = results.reduce((sum, result) => sum + result, 0);

  return (
    <div className={styles.rollResult}>
      <h2 className={styles.resultTitle}>Roll Results</h2>
      <div className={styles.resultGrid}>
        {results.map((result, index) => (
          <div key={index} className={styles.die}>
            {result}
          </div>
        ))}
      </div>
      <div className={styles.total}>
        Total: <span>{total}</span>
      </div>
    </div>
  );
};

export default RollResult;