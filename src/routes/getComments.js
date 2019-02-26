const model = require('./../../models');

module.exports = {
  method: 'GET',
  path: '/comments',
  handler: async (request, h) => {
    const comments = await model.commentsTable.getResponseByQuestionId(request.query.questionId);
    // console.log(request.query.questionId);
    return h.response(comments).code(200);
  },
};
