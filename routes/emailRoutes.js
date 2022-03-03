const mailchimp = require('@mailchimp/mailchimp_marketing');
const keys = require('../config/keys');

module.exports = (app) => {

  app.post('/api/signup', async (req, res) => {

    let emailAdded = false;

    mailchimp.setConfig({
      apiKey: keys.mailChimpKey,
      server: 'us14'
    });

    // need to get this passed in from somewhere!
    const subscribingUser = {
      email: 'emmaknanvgggbbell@gmail.com'
    };

    try {
      await mailchimp.lists.addListMember('ebb0ff88cf',
        {
          email_address: subscribingUser.email,
          status: 'subscribed',
          merge_fields: {
            EMAIL: subscribingUser.email
          }
        }
      );
      emailAdded = true;
    } catch (e) {
      emailAdded = false;
    }

    res.send({ status: emailAdded });

  });

};