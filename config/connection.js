const { connect, connection } = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = process.env.MONGODB_URI;

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;