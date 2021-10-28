export const schema = {
    title: 'application data',
    description: '',
    type: 'object',
    required: [],
    properties: {
      currentBookId: {
        type: 'string',
        description: 'currently selected book',
      },
      email: {
        type: 'string',
        description: 'email of the logged in user',
      },
      userId: {
        type: 'string',
        description: 'identifier of the logged in user',
      },
      isSignedIn: {
        type: 'boolean',
        description: 'is the user logged in',
      },
      token: {
        type: 'string',
        description: 'token of the logged in user',
      },
    }
};