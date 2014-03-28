module.exports = function (exclusions) {
  this.exclusions = exclusions.length ? convertToRegex(exclusions) : [];
};

module.exports.prototype.addExclusion = function (name) {
  this.exclusions.push(convertToRegex(name));
};

// Whether or not the given filename matches a pattern to exclude
module.exports.prototype.shouldIgnore = function (name) {
  for (var i = 0, l = this.exclusions.length; i < l; i++) {
    if (this.exclusions[i].test(name)) {
      return true;
    }
  }

  return false;
};

////////////
// Helpers
////////////

// Takes in a string name or array of strings and returns a regex form of the
// string or strings given
function convertToRegex(name) {
  if (name instanceof Array) {
    return name.map(stringToRegex);
  }

  return stringToRegex(name);
}

// Converts the given string to its regex form
function stringToRegex (str) {
  if (str instanceof RegExp) return str;

  return new RegExp(escapeRegExp(str));
}

// Escapes the string's special chars to use it as a regular expression
// http://stackoverflow.com/a/6969486/700897
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}