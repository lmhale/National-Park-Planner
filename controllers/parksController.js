
const url = "https://developer.nps.gov/api/v1/parks?stateCode=DC&api_key=LTbejI0NltNTgkxg4CRNGkRSLpLc6E1Jch2ZLyGS"
const fetch = require("node-fetch");


module.exports = {





index(req,res,next) {
  fetch(url)
   .then((data) => {
    return data.json()
      })
    .then(data => {
      res.locals.data = data.data

    next();
    })
    .catch(err => next(err));
  }







};
