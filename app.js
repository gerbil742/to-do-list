const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const toDoRouter = require('./routes/toDoRoutes');

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DATABASE).then(() => {
  console.log('Database connection successful');
});

// const list = new ToDoList();

// list.addToDo('do disths', Date.now());
// list.addToDo('do disths', Date.now());

// list.toDoList[0].id = 1;
// list.markComplete(1);

// ToDo.create(list.toDoList);

// console.log(list);

//toDoController.markComplete('61d5cf10fa83191f55faeebc');
//toDoController.addToDo('make food', Date.now());

const app = express();

// Middleware for reading datea from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse incoming html form posts

// Serve static files
app.use(express.static(`${__dirname}/public`));

// Routes
app.use('/todos', toDoRouter);

// Page not found catch all
app.all('*', (req, res, next) => {
  //const err = new Error(`404 error. Page not found. for URL: ${req.url}`);
  res.status(404).sendFile(`${__dirname}/public/404error.html`);
});

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
