const uuid = require('uuid');
const app = require('express')();
app.use(require('body-parser').json());

const db = {
  todos: [],
};

app.get('/api/todos', (_req, res) => res.json(db.todos));

app.post('/api/todos', (req, res) => {
  const todo = req.body;
  todo.$id = uuid();
  db.todos.push(todo);
  return res.json(todo);
});

app.listen(5000, () => console.log('Listening...'));
