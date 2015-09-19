var should = require('should');
var sinon = require('sinon');
var autoTodoLoader = require('..');

describe('AutoTodoLoader', function() {
  var content;
  content = '';

  it('returns original content', function() {
    autoTodoLoader.call({}, content).should.equal(content);
  });
});
