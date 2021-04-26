const User = require('./user.model');
const { fakeUserData } = require('../Database/fixtures');
const {
  validateNotEmpty, 
  validateMongoDuplicationError, 
  validateStringEquality 
} = require('../Utils/testUtils/validators');
const {dbConnect, dbDisconnect} = require('../Server/MemoryMongo');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('User Model Test', () => {
  test('Should save new user', async () => {
    const validAdminUser = new User({
      local: fakeUserData,
      role: fakeUserData.role
    });
    const savedAdmin = await validAdminUser.save();

    validateNotEmpty(savedAdmin);
  });
});