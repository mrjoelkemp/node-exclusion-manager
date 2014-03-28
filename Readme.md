Exclusion Manager
===

Manages a list of file or directory names (or patterns) to ignore/exclude and
provides an easy to way check if a file or directory name should be ignored.

`npm install exclusion-manager`

### Usage

When you know the things you want to ignore ahead of time

```javascript
var ExclusionManager = require('exclusion-manager');

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
```

If you need to add things dynamically

```javascript
emanager.addExclusion('.jshintrc');
```

### Under the hood

Exclusion manager converts everything to Regular expressions (if they're not already) for
more precise matching.