const app = require('../../src/app');

describe('\'translate\' service', () => {
  it('registered the service', () => {
    const service = app.service('translate');
    expect(service).toBeTruthy();
  });
});
