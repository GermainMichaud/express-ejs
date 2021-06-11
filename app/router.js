const express = require('express');
const router = express.Router();
let username;
router.get('/', (req, res) => {
  res.render('index', { username });
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/contact', (req, res) => {
  res.render('contact');
});
router.post('/contact', (req, res) => {
  const usernameForm = req.body.username;
  req.session.username = usernameForm;
  res.render('contact');
});

module.exports = router;
