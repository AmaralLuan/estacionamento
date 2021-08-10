import React, {useState ,useCallback, useContext} from 'react'
import Button from '../../Components/Button/Button'
import styles from './Login.module.css'
import Axios from 'axios';

import { Context } from '../../AuthContext';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState();
  const [isLogged, setIsLogged] = useState(false);

  const { authenticated, handleLogin } = useContext(Context);


  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  },[]);

  const submitValues = () => {
    Axios.post('http://localhost:5000/api/login/', {
      login,
      password
    }).then((response) => {
      if (response) {
        const user = response.data
        localStorage.setItem('@Estacionamento:user', JSON.stringify(user));
        console.log(user);
        setIsLogged(true);
      } else {
        console.log(response.data);
      }
      
    })
  }

  const posts = () => {
    Axios.get('http://localhost:5000/api/posts/').then((response) => {
      if (response) {
        console.log(response.data);
      } else {
        console.log(response.data);
      }
      
    })
  }
  
  return (
    <div className={styles.Login}>
      <form className={styles.LoginBox} onSubmit={handleSubmit}>
        <h3>Faça Login</h3>
        <div>
          <label>Login</label>
          <input 
          type='text' 
          required
          onChange={e =>{setLogin(e.target.value)}}
          />

        </div>

        <div>
          <label>Password</label>
          <input 
          type='text' 
          required
          onChange={e =>{setPassword(e.target.value)}}
          />
        </div>

          {loading ? <h4>Carregando...</h4> :
          <Button type='submit' onClick={submitValues}>Login</Button>}
          <Button type='submit' onClick={handleLogin}>Posts</Button>

        
      </form>
    </div>
  )
}

export default Login
