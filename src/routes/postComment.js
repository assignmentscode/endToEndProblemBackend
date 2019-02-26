const model = require('./../../models');

module.exports = {
  method: 'POST',
  path: '/postComment',
  handler: async (request, h) => {
    const { questionId, questionResponse, responderName } = request.payload;
    const insertStatus = await model.commentsTable
      .insertComment(questionId, questionResponse, responderName);
    return h.response(insertStatus.created).code(200);
  },
};
