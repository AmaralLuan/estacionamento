import React, {useState, useCallback} from 'react'
import styles from './Form.module.css'
import Button from '../Button/Button'

function Form() {
  const [placa, setPlaca] = useState('');
  const [veichle, setVeichle] = useState('');
  const [name, setName] = useState('');
  const time = new Date();

  const data = {
    placa: placa,
    veichle: veichle,
    name: name,
    hour: time.getHours(),
    minutes: time.getMinutes()
  }

  const submitValues = () => {
    console.log(data)
  }

  const handleSubmit = useCallback((event) => {
      event.preventDefault();
      setPlaca('');
      setVeichle('');
      setName('');
  },[]);

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <div>
        <label>PLACA</label>
        <input 
        type='text'
        id='placa'
        onChange={e =>{setPlaca(e.target.value)}} 
        required/>
      </div>

      <div>
        <label>VEÍCULO</label>
        <input 
        type='text' 
        id='veichle' 
        onChange={e =>{setVeichle(e.target.value)}}
        required/>
      </div>

      <div>
        <label>NOME CLIENTE</label>
        <input 
        type='text' 
        id='nome' 
        onChange={e =>{setName(e.target.value)}}
        required/>
      </div>

      <Button type='submit' onClick={submitValues}>Registrar</Button>
    </form>
  )
}

export default Form
