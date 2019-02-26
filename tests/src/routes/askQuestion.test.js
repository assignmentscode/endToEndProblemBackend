const { server } = require('./../../../src/server');

describe('Test for /questions POST route', () => {
  it('should add the question to list of asked questions', async () => {
    const options = {
      url: '/askQuestion',
      method: 'POST',
      payload: {
        question: 'What is my Name?',
      },
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
    await expect(typeof (response.result)).toEqual('boolean');
  });
  it('should return status code 404', async () => {
    const options = {
      url: '/askQuestions',
      method: 'POST',
      payload: {
        question: 'What is my Name?',
      },
    };
    const response = await server.inject(options);
    await expect(response.statusCode).toEqual(404);
  });
});
