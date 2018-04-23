const db = require('../config/connection');

module.exports = {

getAllNotes(){
 const queryPromise = db.any(`
    SELECT * FROM notes`);
  return queryPromise;
},

 createNote(note) {
  const query= db.one(`
    INSERT INTO notes
    (name,comment)
    VALUES ($/name/, $/comment/)
    RETURNING *`,
    note);
  return query;
}



};
