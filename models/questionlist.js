module.exports = (sequelize, DataTypes) => {
  const questionList = sequelize.define('questionList', {
    question: DataTypes.STRING,
  }, {});
  questionList.getAllQuestions = () => questionList.findAll()
    .then(response => response);

  questionList.storeQuestion = inputQuestion => questionList.findOrCreate({
    where: { question: inputQuestion },
  }).spread((user, created) => ({ user, created }));
  return questionList;
};
