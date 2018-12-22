let mongoose = require('mongoose');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

class Database {
  constructor() {
    this._connect()
  }

  _connect() {
    mongoose.connect(process.env.MONGO_DATABASE_URL, { useNewUrlParser: true })
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
      })
  }
}

module.exports = new Database()