const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectID;
const assert = require('assert');

const persistentDataAccess = (collectionName) => {
  const uri =
    'mongodb+srv://HYF-FP-G1:K9i8lCCRD1LqYY2u@hfycluster.n96tz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

  // const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  const dbName = 'HYF_FP_DB';
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const agg = [
    {
      $lookup: {
        from: 'Users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
      },
    },
  ];

  return {
    getAll: async (filter = {}) => {
      let result;
      try {
        await client.connect();

        if (collectionName === 'Books') {
          collection.aggregate(agg, (cmdErr, result) => {
            assert.equal(null, cmdErr);
          });
        }

        result = await collection.find(filter).limit(30).toArray();
      } catch (err) {
        return err;
      } finally {
        await client.close();
      }

      return result;
    },
    textSearch: async (textToSearch) => {
      let result;
      try {
        await client.connect();

        if (collectionName === 'Books') {
          collection.aggregate(agg, (cmdErr, result) => {
            assert.equal(null, cmdErr);
          });
        }

        result = await collection
          .find({ $text: { $search: textToSearch } })
          .limit(30)
          .toArray();
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
        result = await collection.findOne({ _id: new ObjectId(id) });
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

        result = await collection.updateOne(
          { _id: new ObjectId(id) },
          { $set: data }
        );
      } catch (err) {
        // console.error(err);
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
