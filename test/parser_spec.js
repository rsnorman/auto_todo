var should = require('should');
var parser = require('../lib/parser');

describe('AutoTodoParser', function() {
  describe('with no comments', function() {
    it('returns an empty array', function() {
      parser('This is not a TODO item').should.have.lengthOf(0);
    });
  });

  describe('with single TODO comment', function() {
    var content;
    content = '// TODO: Need to document';

    it('returns single todo comment', function() {
      parser(content).should.have.lengthOf(1);
    });

    it('returns the content of the todo comment', function() {
      parser(content)[0].should.equal('Need to document');
    });
  });

  describe('with multiple TODO comment', function() {
    var content;
    content = '// TODO: Need to document\n\
      TODO: Refactor this garbage';

    it('returns two todo comments', function() {
      parser(content).should.have.lengthOf(2);
    });

    it('returns the content of the first todo comment', function() {
      parser(content)[0].should.equal('Need to document');
    });

    it('returns the content of the second todo comment', function() {
      parser(content)[1].should.equal('Refactor this garbage');
    });
  });
});
