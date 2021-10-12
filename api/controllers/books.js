const booksManager = require('../business-logic/books');

const booksController = {
  get: async (req, res) => {
    try {
      const allMessages = await booksManager.getAllMessages();
      res.status(200).send(JSON.stringify(allMessages));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getMessagesForChannel: async (req, res) => {
    try {
      const channelId = req.params.channelId;

      const messages = await booksManager.getMessagesForChannel(channelId);

      res.send(JSON.stringify(messages));
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  put: async (req, res) => {
    try {
      const messageId = req.params.messageId;

      const body = req.body;
      const message = {
        text: body.text,
        id: body.id,
        user: body.user,
        date: body.date,
        channelId: body.channelId,
      };

      if (body.id !== messageId) {
        throw Error('Cannot change message ID after creation!');
      }

      const result = await booksManager.updateMessage(message);

      res.status(200).send(JSON.stringify(result));
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  post: async (req, res) => {
    try {
      const body = req.body;

      const channelId = req.params.channelId;
      const result = await booksManager.createMessage(
        body.user,
        body.text,
        channelId
      );
      res.status(200).send(JSON.stringify(result));
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  delete: async (req, res) => {
    try {
      const messageId = req.params.messageId;

      const result = await booksManager.removeMessage(messageId);

      res.status(200).send(JSON.stringify(result));
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = booksController;
