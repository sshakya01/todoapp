const express= require('express');
const logger = require('morgan');
const path = require ('path');
const bodyParser = require ('body-parser');
const methodOveride = require('method-override');
const app = express();

const todoRoutes = require('./routes/todo-routes');

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`listening to port ${PORT}!`);
});

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOveride('_method'));

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
  res.render('index',{message:'root route loaded'});
})


app.use('/lists', todoRoutes);

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});
