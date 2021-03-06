const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  photo: String,
  race: String,
  gender: String,
  location: String,
  title: {
    type: Array,
    default: undefined
  },
  appearances: {
    type: Array,
    default: undefined
  },
  family: {
    type: Array,
    default: undefined
  },
  quests: {
    type: Array,
    default: undefined
  },
  caste: String,
  class: String,
  voice: String
});

characterSchema.statics.getRandom = function(count) {
  return this.aggregate([{ '$sample': { 'size': count } }]);
};

module.exports = mongoose.model('Character', characterSchema);
