var wordwrap = require('./../wordwrap');
var assert = require('chai').assert;

describe('Tests ::: ', function() {

  it('should return the string if it is shorter than column length ', function(done) {
     var result = wordwrap('word word', 10);
     assert.equal('word word', result);
     done();
  });

    it('should contain only one line break', function(done) {
     var result = wordwrap('word word', 9);
     assert.equal('word\nword', result);
     done();
  });

});
