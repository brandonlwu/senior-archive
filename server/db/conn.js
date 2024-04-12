const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config()
const Db = process.env.MONGODB_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// const client = new MongoClient(Db, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
let _db;

module.exports = {
  connectToServer: async function (callback) {

    try {
      await client.connect();
    } catch (e) {
      console.error(e);
    }

    _db = client.db("archives");

    return (_db === undefined ? false : true);
  },
  getDb: function () {
    return _db;
  },
};
