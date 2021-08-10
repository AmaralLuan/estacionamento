const express = require('express');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const app = express();
const SECRET = 'segredo'

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome!'
  })
})

app.post('/api/login', (req, res) => {

  const login = req.body.login;
  const password = req.body.password;

  if (login === 'luan' && password === '123') {
    const user = {
      id: 1,
      name: 'Luan'
    }
  
    jwt.sign({ user }, SECRET, (err, token) => {
      res.json({
        token
      })
    })
  }
  
})

/* Verify token */

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');

    // get token from bearerHeader

    const token = bearer[1]

    req.token = token;

    // next
    next();

  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

/* ROUTE TO BE PROTECTED */

app.post('/api/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, SECRET, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'post created...',
        authData
      })
    }
  })
})

app.get('/api/posts', verifyToken, (req, res) => {
  res.json({
    message: 'Tudo certo por aqui'
  })
})

/*   SERVER RUNNING ON PORT ... */

app.listen(5000, () => {
  console.log('listening on port 5000');
})