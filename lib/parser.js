/*!
 * AutoTODO
 * AutoTodoParser
 * Copyright(c) 2015 Ryan Scott Norman
 * MIT Licensed
 */

'use strict';

function splitLines(content) {
  return content.split('\n');
}

function parseComment(line) {
  var todoCommentMatcher, matchingLine;
  todoCommentMatcher = /TODO:(.*)/
  matchingLine = line.match(todoCommentMatcher);
  if ( !matchingLine ) {
    return;
  }
  return line.match(todoCommentMatcher)[1].trim();
}

function isTodo(todoComment) {
  return !!todoComment;
}

/**
 * Finds all the TODO comments
 *
 * @param {String} content content that may contain TODO comments
 * @return {Array} list of TODO comments
 */
function AutoTodoParser(content) {
  return splitLines(content).map(parseComment).filter(isTodo);
};

module.exports = AutoTodoParser;
