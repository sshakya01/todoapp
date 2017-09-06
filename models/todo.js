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

Todo.update = (lists, id) => {
  return db.one(`
     UPDATE todos SET
     title = $1,
     relese_year = $2,
     director = $3
     WHERE id = $4
     RETURNING *
   `, [lists.title, lists.status, lists.category, id]);
}
Todo.destroy = function(id){
  return db.query(`DELETE FROM lists WHERE id= $1`,[id])
}
module.exports = Todo;
