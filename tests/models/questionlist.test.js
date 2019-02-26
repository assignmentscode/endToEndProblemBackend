const model = require('../../models');

const question = 'Which was the first 3rd gen programming languagee?';
describe('storeQuestion ()', () => {
  beforeAll(async () => {
    await model.questionList.truncate();
  });
  it('should insert only 1 row into database', async () => {
    await model.questionList.storeQuestion(question);
    expect(await model.questionList.count()).toEqual(1);
  });
  it('should insert a question into database', async () => {
    await model.questionList.findById(1).then((result) => {
      expect(result.question).toEqual(question);
    });
  });
  it('should not enter duplicate entry into database', async () => {
    await model.questionList.storeQuestion(question)
      .then(({ created }) => {
        expect(created).toEqual(false);
      });
  });
});
describe('getAllQuestions ()', () => {
  afterAll(async () => {
    model.sequelize.close();
  });
  it('should return the list of all question stored in database', async () => {
    await model.questionList.getAllQuestions().then((result) => {
      expect(result[0].question).toEqual(question);
      expect(result.length).toEqual(1);
    });
  });
});
