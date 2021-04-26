const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    unique: true,
    lowercase: true,
    trim: true.String,
  },
  password: {
    type: String,
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
  },
  picture: {
    type: String,
    default: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

UserSchema.methods.comparePassword = function(password) {
  const ep = bcrypt.hashSync(password, 10);
  return bcrypt.compareSync(ep, this.password);
}

module.exports = model('User', UserSchema);