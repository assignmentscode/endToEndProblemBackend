module.exports = (sequelize, DataTypes) => {
  const commentsTable = sequelize.define('commentsTable', {
    questionID: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'questionList',
      //   key: 'id',
      // },
    },
    response: DataTypes.STRING,
    responderName: DataTypes.STRING,
  }, {});
  commentsTable.insertComment = (inputQuestionId, inputResponse, inputResponder) => commentsTable
    .findOrCreate({
      where: {
        questionID: inputQuestionId,
        response: inputResponse,
        responderName: inputResponder,
      },
    }).spread((user, created) => ({ user, created }));
  commentsTable.getResponseByQuestionId = inputQuestionId => commentsTable
    .findAll({
      where: {
        questionID: inputQuestionId,
      },
    }).then(response => response);
  return commentsTable;
};
