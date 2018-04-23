const db = require('../config/connection');

module.exports = {

getAllFavorites(){
 const queryPromise = db.any(`
    SELECT * FROM notes`);
  return queryPromise;
},

 createFavorite(note) {
  const query= db.one(`
    INSERT INTO notes
    (name,comment)
    VALUES ($/name/, $/comment/)
    RETURNING *`,
    note);
  return query;
}



};
