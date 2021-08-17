const pool = require('./pool');
const ErrorHandler = require('../utils/error');
module.exports = {
  query(queryText, params) {
    return new Promise((resolve, reject) => {
      pool
        .query(queryText, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(new ErrorHandler(err, 500));
        });
    });
  },
};
