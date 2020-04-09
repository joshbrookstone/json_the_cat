const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Chartreux', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.";

      // compare returned description
      assert.equal((expectedDesc),(desc));

      done();
    });
  });

  it('should return an error if an invalid/non-existant breed is passed in', (done) => {
    fetchBreedDescription('choxy', (err, desc) => {
      assert.equal(err,null);

      const expectedDesc = (null,desc);

      assert.equal((expectedDesc),(desc));

      done();
    });
  });




});


// Add another test (it) here which should test the scenario where an invalid/non-existent breed is passed in.

