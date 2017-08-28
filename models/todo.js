const db= require('../db/config');
const Todo= {};

Todo.findAll = function(){
  return db.query('SELECT * FROM lists');
}

Todo.findOne = function(id){
  return db.oneOrNone('SELECT * FROM lists WHERE id = $1',[id])
}

Todo.create = function(list){
  return db.one(`INSERT INTO lists (title, status, category) VALUES($1,$2,$3) RETURNING *`,[list.title,list.status,list.category])
}

Todo.destroy = function(id){
  return db.query(`DELETE FROM lists WHERE id= $1`,[id])
}
module.exports = Todo;
