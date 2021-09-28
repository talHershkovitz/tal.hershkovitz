//import modules
const express = require('express');
const path = require('path');
// init the app
const app = express();
// static files
// app.use('/static', express.static(path.join(__dirname, 'public')))
// home route

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/html/CV.html'));
});
app.get('/details', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/html/details.html'));
});

app.get('/education', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/html/education.html'));
});

app.get('/experience', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/html/experience.html'));
});

app.get('/MilitaryService', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/html/MilitaryService.html'));
});

app.get('/contactUs', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/html/contactUs.html'));
});






// set server to listen at port
app.listen(3000, () => {
  console.log('Server is renning at port 3000...')
});