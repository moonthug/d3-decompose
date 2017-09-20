/**
 * Decomposes transform attribute in an object
 * @param {string} input Transform string to decompose
 * @param {boolean=true} asString Return the values as arrays (false) or transform strings (true)
 * @returns {}
 */
export default function decompose(input = '', asString = true) {
  let transform = {};

  if(!input || input === '') return transform;

  const typeRegex = /(\w+\([\w+., -]*\))/g;
  const valuesRegex = /([-\d.]+)[, ]?/g;

  let t = null;

  while (t = typeRegex.exec(input)) {
    const typeValuesRegex = /(\w+)\(([^\)]+)\)/g;
    let tv = typeValuesRegex.exec(t[1]);

    const key = tv[1];
    const valueString = tv[2];
    let values = [];

    let v = null;
    while (v = valuesRegex.exec(valueString)) {
      values.push(v[1]);
    }

    transform[key] = asString === true ? `${key}(${values.join(',')})` : values;
  }

  return transform;
}