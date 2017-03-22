let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Quote = new Schema({
  estimate: { type: String, required: true },
  quote: { type: String, required: true },
  jobid: { type: String, required: true },
  userid: { type: String, required: true }
});

module.exports = mongoose.model( 'Quote', Quote );

