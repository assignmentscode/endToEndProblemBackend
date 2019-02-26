const model = require('./../../models');

module.exports = {
  method: 'GET',
  path: '/questions',
  handler: async (request, h) => {
    const questions = await model.questionList.getAllQuestions();
    return h.response(questions).code(200);
  },
};
