const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// here we define the schema of the user dataset
const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name)=>name.length > 2,
      message: 'Name must be longer then 2 character long.'
    },
    required: [true, 'Name is required.']
  },
  postCount: Number
});

// make the data-base of name users_test
const User = mongoose.model('user', UserSchema);

module.exports = User;
