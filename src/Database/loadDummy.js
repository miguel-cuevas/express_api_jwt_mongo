const User = require('../Models/user.model');
const bcrypt = require('bcrypt');
const { fakeUserData } = require('./fixtures');

module.exports = async () => {
  const admin = new User({
    ...fakeUserData,
    password: bcrypt.hashSync(fakeUserData.password, 10),
  });
   await admin.save();
}
