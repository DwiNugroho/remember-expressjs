const connect = require('../config');

exports.fetchAdminData = where => {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM admin`;

    if (where) {
      queryString = `SELECT * FROM admin WHERE ?`;
    }

    connect.query(queryString, where, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
