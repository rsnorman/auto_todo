/*!
 * LogHunterLoader
 * Copyright(c) 2015 Ryan Scott Norman
 * MIT Licensed
 */

'use strict';

var Parser = require('./lib/parser');
var loaderUtils = require('loader-utils');

/**
 * Loader for parsing TODO comments and generating TODO markdown file
 *
 * @param {String} content with potential TODO comments
 * @return {String} original content
 */
function AutoTodoLoader(content) {
  var config;
  config = loaderUtils.parseQuery(this.query);

  return content;
}

module.exports = AutoTodoLoader;
