/**
 * Decomposes transform attribute in an object
 * @param {string} input Transform string to decompose
 * @param {boolean=true} asString Return the values as arrays (false) or transform strings (true)
 * @returns {}
 */
function decompose() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var asString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var transform = {};

  if (!input || input === '') return transform;

  var typeRegex = /(\w+\([\w+., -]*\))/g;
  var valuesRegex = /([-\d.]+)[, ]?/g;

  var t = null;

  while (t = typeRegex.exec(input)) {
    var typeValuesRegex = /(\w+)\(([^\)]+)\)/g;
    var tv = typeValuesRegex.exec(t[1]);

    var key = tv[1];
    var valueString = tv[2];
    var values = [];

    var v = null;
    while (v = valuesRegex.exec(valueString)) {
      values.push(v[1]);
    }

    transform[key] = asString === true ? key + '(' + values.join(',') + ')' : values;
  }

  return transform;
}

export { decompose };
//# sourceMappingURL=d3-decompose.mjs.map
