const connection = require(`./connection`);
const bcrypt = require(`bcrypt`);

function User() {}

User.prototype = {
  find(user = null, callback) {
    if (user) {
      // if user = number return field = id, if user = string return field = username.
      var field = Number.isInteger(user) ? `id` : `username`;
    }

    const sql = `SELECT * FROM users WHERE ${field} = ?`;

    connection.query(sql, user, (err, result) => {
      if (err) { throw err; }

      if (result.length) {
        callback(result[0]);
      } else {
        callback(null);
      }
    });
  },

  create(body, callback) {
    const pwd = body.password;
    // Hash the password before insert it into the database.
    body.password = bcrypt.hashSync(pwd, 10);

    const bind = [];

    for (prop in body) {
      bind.push(body[prop]);
    }

    const sql = `INSERT INTO users(username, fullname, password) VALUES (?, ?, ?)`;

    connection.query(sql, bind, (err, result) => {
      if (err) { throw err; }

      callback(result.insertId);
    });
  },

  login(username, password, callback) {
    // find the user data by his username.
    this.find(username, user => {
      // if there is a user by this username.
      if (user) {
        // now we check his password.
        if (bcrypt.compareSync(password, user.password)) {
          callback(user);
          return;
        }
      }
      // if the username/password is wrong then return null.
      callback(null);
    });
  }
};

module.exports = User;
