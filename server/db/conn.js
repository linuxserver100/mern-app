const { MongoClient } = require('mongodb');
process.env.ATLAS_URI="mongodb+srv://lalshay1712:AqeQW34FHRE@cluster2.tidgl1i.mongodb.net/cluster2-1?retryWrites=true&w=majority&appName=Cluster2"
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db('sample_airbnb');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
