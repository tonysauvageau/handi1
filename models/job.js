let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Job = new Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, minLength: 10 },
  startDate: { type: Date, default: Date.now, required: true},
  endDate: { type: Date, required: true },
  location: { type: String, required: true },
  //image: { type: String },
  budget: { type: Number },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model( 'Job', Job );

