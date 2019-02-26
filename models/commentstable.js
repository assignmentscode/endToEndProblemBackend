module.exports = (sequelize, DataTypes) => {
  const commentsTable = sequelize.define('commentsTable', {
    questionID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'questionList',
        key: 'id',
      },
    },
    response: DataTypes.STRING,
    responderName: DataTypes.STRING,
  }, {});
  commentsTable.associate = function (models) {
    // associations can be defined here
  };
  return commentsTable;
};
