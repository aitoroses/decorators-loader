'use strict';

var extend = require('extend-object');
var loaderUtils = require('loader-utils');
var os = require('os');
var Compiler = require('js-decorators');
var defaults = {};

module.exports = function(source) {

  var compiler = new Compiler();

  var filename = loaderUtils.getRemainingRequest(this);
  var content = source;
  var map;
  var options = {};
  var result;

  this.cacheable && this.cacheable();

  // Process query and setup options/defaults/forced
  // extend(options, defaults, loaderUtils.parseQuery(this.query));
  Object.keys(options).forEach(function(key) {
    switch(options[key]) {
      case 'true':
        options[key] = true;
        break;
      case 'false':
        options[key] = false;
        break;
      case 'undefined':
        options[key] = undefined;
        break;
      case 'null':
        options[key] = null;
        break;
    }
  });

  // Parse code through compiler
  try {
    result = compiler.compile(content, options);
    return result;
  }
  catch(errors) {
    throw new Error(errors.join(os.EOL));
  };

}
