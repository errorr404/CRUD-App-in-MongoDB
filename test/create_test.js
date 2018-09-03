const assert = require('assert');
const User = require('../src/user');

describe('Creating User', ()=>{
    it('saves a user',(done)=>{
        // create a new user
        const joe = new User({name: 'Joe'});

        // save the user
        joe.save()
        .then(() => {
          // Has joe been saved successfully ?
          assert(!joe.isNew);
          done();
        });
    });
});
