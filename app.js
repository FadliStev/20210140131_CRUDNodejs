const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.js');
const port = 3000;

app.use(express.json());

app.use('/todo', todoRoutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) =>{
    res.render('index');
});