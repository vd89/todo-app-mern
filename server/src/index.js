/**
 * /* eslint-disable no-console
 *
 * @format
 */

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const errMiddleware = require('./middleware/errorHandler');
const dbController = require('./controller/dbController');
const todoRoute = require('./routes/todoRoute');

require('dotenv').config();

const app = express();

// Middleware
app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGINAL,
  })
);
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercepts OPTIONS method
  if (req.method === 'OPTIONS') {
    // respond with 200
    res.send(200);
  } else {
    // move on
    next();
  }
});
app.get('/', (req, res) => {
  res.status(200).json({ data: { message: 'success', value: 'The Server is running' } });
});

// Routes 
app.use('/api/todo',todoRoute)

app.use(errMiddleware.notFound);
app.use(errMiddleware.errorHandler);


// Database Connection 
dbController()

const port = process.env.PORT || 1411;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
