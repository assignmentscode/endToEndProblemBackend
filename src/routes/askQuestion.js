const model = require('./../../models');

module.exports = {
  method: 'POST',
  path: '/askQuestion',
  handler: async (request, h) => {
    const { question } = request.payload;
    const alreadyExists = await model.questionList.storeQuestion(question);
    return h.response(alreadyExists.created).code(200);
  },
};
