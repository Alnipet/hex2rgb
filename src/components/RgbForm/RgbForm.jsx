import React, { useState } from 'react';
import styles from './RgbForm.module.css';

export const RgbForm = () => {
  const [input, setInput] = useState();
  const [color, setColor] = useState();
  const [fontColor, setFontColor] = useState('#000');

  const handleRgbInput = (event) => {
    const value = event.target.value;

    if (value.length === 0) {
      setInput('');
      setColor('#ffffff');
      return;
    }

    const r = parseInt(value[1] + value[2], 16);
    const g = parseInt(value[3] + value[4], 16);
    const b = parseInt(value[5] + value[6], 16);

    (r * 299 + g * 587 + b * 114) / 1000 > 128
      ? setFontColor('#000')
      : setFontColor('#fff');

    if (value.length === 7) {
      if (String(value).match(/^#[a-fA-F0-9]{6}/g)) {
        setInput(`rgb(${r}, ${g}, ${b})`);
        setColor(value);
      } else {
        setInput('Ошибка!');
        setColor('red');
      }
    } else {
      setInput('');
    }
  };

  const styleColor = {
    backgroundColor: color,
  };

  const styleText = {
    color: fontColor,
  };

  return (
    <div style={styleColor} className={styles.wrapper}>
      <form className={styles.form}>
        <input
          className={styles.input}
          onChange={(event) => handleRgbInput(event)}
          maxLength={7}
        ></input>
        <div style={styleText} className={styles.message}>
          {input}
        </div>
      </form>
    </div>
  );
};
