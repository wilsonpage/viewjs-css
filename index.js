umd(function(define) {
define(function(require, exports, module) {
'use strict';

/**
 * Adds a 'scoped' stylesheet to
 * template output when a `css`
 * property is present on the
 * View prototype.
 *
 * @param  {View} view
 */
module.exports = function(view) {
  var template = view.template || function() { return ''; };
  view.stylesheet = function() {
    return '<style scoped>' + view.css + '</style>';
  };
  view.template = function() {
    return this.stylesheet() + template.apply(view, arguments);
  };
};

});},'module-name');function umd(fn,n){
if(typeof define=='function')return fn(define);
if(typeof module=='object')return fn(function(c){c(require,exports,module);});
var m={exports:{}},r=function(n){return window[n];};fn(function(c){window[n]=c(r,m.exports,m)||m.exports;});}