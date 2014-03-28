var ExclusionManager = require('../');

var toIgnore = [
  'node_modules',
  'bower_components',
  '.git',
  'vendor',
  // Regexes supported too
  /.*\.js/,
  /.*\.scss/
];

var emanager = new ExclusionManager(toIgnore);

console.log(emanager.shouldIgnore('bundle.js')); // returns true