const mongoose = require('mongoose');

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(process.env.DB_URL, connectionParams)
  .then(() => {
    console.log('Connected to database ');
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

const db = mongoose.connection;

db.on('open', () => {
  console.log('MongoDB connection successful');
});

module.exports = mongoose;
