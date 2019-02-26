const { server } = require('./../../../src/server');

describe('Test for /questions GET route', () => {
  it('should return the status code 200', async () => {
    const options = {
      url: '/questions',
      method: 'GET',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
  it('should return status code 404', async () => {
    const options = {
      url: '/question',
      method: 'GET',
    };
    const response = await server.inject(options);
    await expect(response.statusCode).toEqual(404);
  });
  it('should return object', async () => {
    const options = {
      url: '/questions',
      method: 'GET',
    };
    const response = await server.inject(options);
    await expect(typeof (response.result)).toEqual('object');
  });
});
