const { server } = require('./../../../src/server');

describe('Test for /postComment POST route', () => {
  it('should add the comment to list of comments if does not exists', async () => {
    const options = {
      url: '/postComment',
      method: 'POST',
      payload: {
        questionId: 1,
        questionResponse: 'C was the 1st general purpose popular programming language',
        responderName: 'Shashwat',
      },
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
    await expect(typeof (response.result)).toEqual('boolean');
  });
  it('should return status code 404', async () => {
    const options = {
      url: '/postComments',
      method: 'POST',
      payload: {
        questionId: 1,
        questionResponse: 'C was the 1st general purpose popular programming language',
        responderName: 'Shashwat',
      },
    };
    const response = await server.inject(options);
    await expect(response.statusCode).toEqual(404);
  });
});
