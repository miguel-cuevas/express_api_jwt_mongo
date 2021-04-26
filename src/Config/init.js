/* eslint-disable no-undef */
const { app, mongo } = require('../Config');
const { dbConnect } = require('./MemoryMongo');
const loadDummy = require('../Database/loadDummy');
const db = require('../Models');

module.exports = async () => {
  if (app.env === 'local') {
    await dbConnect();
    await loadDummy();
  } else {
    db.mongoose
      .connect(`mongodb://${mongo.host}:${mongo.port}/${mongo.db}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(() => {
        console.log('Successfully connection to Mongo');
        
      }).catch((err) => {
        console.error('Error conecting to Mongo', err);
        process.exit();
      });
  }
}
