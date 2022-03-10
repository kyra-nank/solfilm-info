// import sslRedirect from 'heroku-ssl-redirect';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// app.use(sslRedirect(['development', 'production']));

// handle http to https redirect
if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
}

app.use(bodyParser.json());

require('./routes/emailRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up specific production assets like main.js, or main.css
  app.use(express.static('client/build'));

  // Express will serve up the index.html file if route not recognized
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port 5000');
});