const { server } = require('./../../../src/server');

describe('Test for /comments GET route', () => {
  it('should return the status code 200', async () => {
    const options = {
      url: '/comments?questionId=1',
      method: 'GET',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
  it('should return status code 404', async () => {
    const options = {
      url: '/comment?questionId=1',
      method: 'GET',
    };
    const response = await server.inject(options);
    await expect(response.statusCode).toEqual(404);
  });
  it('should return object', async () => {
    const options = {
      url: '/comments?questionId=1',
      method: 'GET',
    };
    const response = await server.inject(options);
    await expect(typeof (response.result)).toEqual('object');
  });
});
