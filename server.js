const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const path = require('path')

const parkRoutes = require('./routes/park-routes');




const PORT=process.env.PORT || 3000;

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.json());


app.use('/',parkRoutes);
// const url = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=LTbejI0NltNTgkxg4CRNGkRSLpLc6E1Jch2ZLyGS"



// app.get('/',(req,res)=> {
// const parkData = fetch(url)
// parkData
//   .then(data => data.json())
//   .then(data => {
//     // console.log(data)
//     // res.send(data)
//   res.render('home', {
//      data:  JSON.stringify(data)


//     });

//   })

//   .catch(err => console.log(err));
// })












app.listen(PORT,()=> {
  console.log(`listening on port ${PORT}!`);
});
