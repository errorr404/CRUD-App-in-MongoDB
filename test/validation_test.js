const assert = require('assert');
const User = require('../src/user');

describe('validation records', () => {
  it('requires a user name', () => {
      const user = new User({name: undefined});
      const validationResult = user.validateSync();
      const {message} = validationResult.errors.name;

      assert(message ==='Name is required.');
  });

  it('requires a user name is longer then 2 character', () => {
      const user = new User({name: 'as'});
      const validationResult = user.validateSync();
      const {message} = validationResult.errors.name;

      assert(message === 'Name must be longer then 2 character long.');
  });
  it('disallows invalid record from being save',(done) => {
    const user = new User({name: 'ad'});
    user.save()
      .catch((validationResult)=>{
        const {message} = validationResult.errors.name;
          assert(message === 'Name must be longer then 2 character long.');
          done();
      });
  });
});
