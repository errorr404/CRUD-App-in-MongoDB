const assert =  require('assert');
const User = require('../src/user');

describe('Readijng users out of the database',()=>{

  let joe;
  beforeEach((done)=>{
    joe = new User({name: 'Joe'});
    joe.save()
      .then(() => done());
  });

  it('finds all the users with a name of joe', (done) => {
    User.find({name: 'Joe'})
    .then((users) => {
      //console.log(users);
      // compare the id of the created object
      assert(users[0]._id.toString() === joe._id.toString());
      done();
    });
  });

  it('find the user with a particular id', (done) => {
    User.findOne({ _id: joe._id })
      .then((user) => {
        assert(user.name === 'Joe');
        done();
      });
  });
});
