const db= require('..db/config');
const Todo= {};

Todo.findAll = function(){
  return db.query('SELECT * FROM lists');
}

module.exports = Todo;
