import React from 'react'
import styles from './Button.module.css';

function Button(props) {
  return (
    <button type='submit' className={styles.Button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
