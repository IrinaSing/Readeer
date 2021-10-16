const usersManager = require('../business-logic/users');

const usersController = {
  get: async (req, res) => {
    try {
      const userId = req.params.userId;
      console.log('controller', userId);
      const result = await usersManager.get(userId);

      const userDetails = {
        id: result._id,
        username: result.username,
        firstName: result.firstName,
        lastName: result.lastName,
        birthday: result.birthday,
        email: result.email,
        city: result.city,
      };

      res.status(200).send(JSON.stringify(userDetails));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  // getMessagesForChannel: async (req, res) => {
  //   try {
  //     const channelId = req.params.channelId;

  //     const messages = await userManager.getMessagesForChannel(channelId);

  //     res.send(JSON.stringify(messages));
  //   } catch (error) {
  //     res.status(500).send(error.message);
  //   }
  // },
  // put: async (req, res) => {
  //   try {
  //     const messageId = req.params.messageId;

  //     const body = req.body;
  //     const message = {
  //       text: body.text,
  //       id: body.id,
  //       user: body.user,
  //       date: body.date,
  //       channelId: body.channelId,
  //     };

  //     if (body.id !== messageId) {
  //       throw Error('Cannot change message ID after creation!');
  //     }

  //     const result = await userManager.updateMessage(message);

  //     res.status(200).send(JSON.stringify(result));
  //   } catch (error) {
  //     res.status(500).send(error.message);
  //   }
  // },
  // post: async (req, res) => {
  //   try {
  //     const body = req.body;

  //     const channelId = req.params.channelId;
  //     const result = await userManager.createMessage(
  //       body.user,
  //       body.text,
  //       channelId
  //     );
  //     res.status(200).send(JSON.stringify(result));
  //   } catch (error) {
  //     res.status(500).send(error.message);
  //   }
  // },
  // delete: async (req, res) => {
  //   try {
  //     const messageId = req.params.messageId;

  //     const result = await userManager.removeMessage(messageId);

  //     res.status(200).send(JSON.stringify(result));
  //   } catch (error) {
  //     res.status(500).send(error.message);
  //   }
  // },
};

module.exports = usersController;
