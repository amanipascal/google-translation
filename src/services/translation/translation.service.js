// Initializes the `translation` service on path `/translation`
const { Translation } = require('./translation.class');
const hooks = require('./translation.hooks');
const translate = require('@iamtraction/google-translate');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/translation', new Translation(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('translation');
  service.hooks({
    before: {
      create: async (context) => {
        // console.log('data: ', context.data.text)
        await translate(context.data.text, { to: 'fr' }).then(res => {
          context.result = res.text
        }).catch(err => {
          context.result = err
          console.error(err);
        });
        
      }
    }
  })

  service.hooks(hooks);
};
