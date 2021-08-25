require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');

app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));
app.use(express.json());
// if (process.env.NODE_ENV === 'development') { app.use(morgan('dev')) }

app.use(cookieParser());

app.use('/user', require('./routes/userJwt'));
app.use('/input', require('./routes/inputs'));
app.use('/balance', require('./routes/balance'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

// custom error handler
app.use("/user", (error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).json({
    message: error.message || 'Unknown Error!',
  });
});
app.use("/input", (error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).json({
    message: error.message || 'Unknown Error!',
  });
});
app.use("/balance", (error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).json({
    message: error.message || 'Unknown Error!',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
