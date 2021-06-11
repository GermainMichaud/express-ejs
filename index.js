const express = require('express');
const session = require('express-session');
const router = require('./app/router');
const app = express();
const PORT = process.env.PORT || 3000;

app.locals.username = 'test Username';

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', cookie: { maxAge: 6000 } }));

app.use((req, res, next) => {
  if (req.session.username) {
    app.locals.username = req.session.username;
  }
  next();
});

app.use(router);

// EXEMPLE
app.get('/home', (req, res, next) => {
  // app.locals.username = 'New Username';
  res.locals.username = 'depuis le res';
  res.render('about');
});

app.get('/test', (req, res) => {
  // app.locals.username = 'New Username';
  console.log('TEST => ', res.locals.username);
  res.render('about');
});
// FIN EXEMPLE

app.listen(PORT, () => {
  console.log(`Server at: http://locahost:${PORT}`);
});
