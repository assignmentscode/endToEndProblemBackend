const model = require('../../models');

const question = 'Which was the first 3rd gen programming languagee?';
const questionId = 1;
const response = 'I am really not Sure';
const responderName = 'John Doe';
describe('insertComment ()', () => {
  beforeAll(async () => {
    await model.questionList.truncate();
    await model.questionList.storeQuestion(question);
  });
  it('should insert a comment in comments Table', async () => {
    await model.commentsTable.insertComment(questionId, response, responderName);
    expect(await model.commentsTable.count()).toEqual(1);
  });
  it('should insert a comment into database', async () => {
    await model.commentsTable.findById(1).then((result) => {
      expect(result.response).toEqual(response);
    });
  });
  it('should not enter duplicate entry into database', async () => {
    await model.commentsTable.insertComment(questionId, response, responderName)
      .then(({ created }) => {
        expect(created).toEqual(false);
      });
  });
});
describe('getResponseByQuestionId ()', () => {
  afterAll(async () => {
    model.sequelize.close();
  });
  it('should return the list of all responses for a given question', async () => {
    await model.commentsTable.getResponseByQuestionId(1).then((result) => {
      expect(result[0].response).toEqual(response);
      expect(result.length).toEqual(1);
    });
  });
});
