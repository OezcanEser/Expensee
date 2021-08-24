if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const path = require('path')
const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const ErrorHandler = require('./utils/error');
app.use(express.static(path.join(__dirname, "../", "frontend", "build")))
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/user', require('./routes/userJwt'));
app.use('/input', require('./routes/inputs'));
app.use('/balance', require('./routes/balance'));

//if route not exist
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../", 'frontend', 'build', 'index.html'))
  // next()
});

// if (process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, '/frontend/build')))
//   app.get('*', (req, res) =>    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))  )}

//custom error handler
// app.use((error, req, res, next) => {
//   if (res.headerSent) {
//     return next(error);
//   }
//   res.status(error.code || 500).json({
//     message: error.message || 'Unknown Error!',
//   });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});