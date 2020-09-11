/** @format */

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(400);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    data: {
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? ' 🌵 🌵 ' : error.stack,
    },
  });
};

module.exports = {
  notFound,
  errorHandler,
};
