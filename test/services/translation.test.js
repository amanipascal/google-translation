const app = require('../../src/app');

describe('\'translation\' service', () => {
  it('registered the service', () => {
    const service = app.service('translation');
    expect(service).toBeTruthy();
  });
});
