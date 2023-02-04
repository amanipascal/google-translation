const app = require('../../src/app');

describe('\'tanslation\' service', () => {
  it('registered the service', () => {
    const service = app.service('tanslation');
    expect(service).toBeTruthy();
  });
});
