const { MongoClient } = require("mongodb");
//const Db = process.env.ATLAS_URI;
//const client = new MongoClient(Db, {
const client = new MongoClient('mongodb://127.0.0.1:27017', {  
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db;
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};