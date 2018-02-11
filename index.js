const express = require('express');
const app = express();
const path = require('path');
// const views = require('./views');

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'views')));

app.get('/',(req,res) => {
  res.render('Hello',{
    name:"jawhar"
  });
})

app.listen(3000,() => {
  console.log("listening On 3000");
});
