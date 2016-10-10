/* jshint node: true */
'use strict';
var path = require("path");

module.exports = {
  name: 'ember-precondition',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  }
};
