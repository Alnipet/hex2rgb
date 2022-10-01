import React, { useState } from 'react';
import styles from './RgbForm.module.css';

export const RgbForm = () => {
  const [input, setInput] = useState();
  const [color, setColor] = useState();

  const handleRgbInput = (event) => {
    const value = event.target.value;

    if (value.length === 0) {
      setInput('');
      setColor('#ffffff');
      return;
    }

    const a = parseInt(value[1] + value[2], 16);
    const b = parseInt(value[3] + value[4], 16);
    const c = parseInt(value[5] + value[6], 16);

    if (value.length === 7) {
      if (String(value).match(/^#[a-fA-F0-9]{6}/g)) {
        setInput(`rgb(${a}, ${b}, ${c})`);
        setColor(value);
      } else {
        setInput('Ошибка!');
      }
    } else {
      setInput('Ввидите значение в формате HEX (например: #1f5f90)');
    }
  };

  const styleColor = {
    backgroundColor: color,
  };

  return (
    <div style={styleColor} className={styles.wrapper}>
      <form className={styles.form}>
        <input
          className={styles.input}
          onChange={(event) => handleRgbInput(event)}
          maxLength={7}
        ></input>
        <div className={styles.message}>{input}</div>
      </form>
    </div>
  );
};
