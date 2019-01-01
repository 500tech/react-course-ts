const app = require('express')();

const db = {
  todos: [],
};

app.get('/api/todos', (_req, res) => res.json(db.todos));

app.listen(5000, () => console.log('Listening...'));
