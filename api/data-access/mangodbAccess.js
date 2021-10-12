const { MongoClient } = require('mongodb');

const persistentDataAccess = (collectionName) => {
  const uri =
    'mongodb+srv://HYF-FP-G1:K9i8lCCRD1LqYY2u@hfycluster.n96tz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

  // const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  const dbName = 'HYF_FP_DB';
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  return {
    getAll: async (filter = {}) => {
      let result;
      try {
        await client.connect();
        result = await collection.find(filter).toArray();
      } catch (err) {
        return err;
      } finally {
        await client.close();
      }

      return result;
    },
    getById: async (id) => {
      let result;
      try {
        await client.connect();
        result = await collection.findOne({ _id: id });
      } catch (err) {
        return err;
      } finally {
        await client.close();
      }

      return result;
    },
    insert: async (data) => {
      let result;
      try {
        await client.connect();
        result = await collection.insertOne(data);
      } catch (err) {
        return err;
      } finally {
        await client.close();
      }

      return result;
    },

    update: async (id, data) => {
      let result;
      try {
        await client.connect();
        result = await collection.updateOne({ _id: id }, { $set: data });
      } catch (err) {
        return err;
      } finally {
        await client.close();
      }

      return result;
    },
    delete: async (id) => {
      let result;
      try {
        await client.connect();
        result = await collection.deleteOne({ _id: id });
      } catch (err) {
        return err;
      } finally {
        await client.close();
      }

      return result;
    },
  };
};

module.exports = persistentDataAccess;
