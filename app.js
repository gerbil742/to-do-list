const ToDoList = require('./utils/toDoList');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ToDo = require('./models/toDoModel');
const toDoController = require('./controllers/toDoController');
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

// Serve static files
app.use(express.static(`${__dirname}/public`));

// Routes
app.use('/todos', toDoRouter);

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
