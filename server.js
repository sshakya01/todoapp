const express= require('express');
const logger = require('morgan');
const path = require ('path');
const bodyParser = require ('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`listening to port ${PORT}!`);
});

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res)=> {
  res.send('root route loaded');
})

const todoRoutes = require('./routes/todo-routes');
app.use('/lists', todoRoutes);

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});
