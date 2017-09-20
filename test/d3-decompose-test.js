var tape = require('tape'),
  t = require('../');


tape('creates an empty object', function(test) {
  var d = t.decompose;
  test.deepEqual(d(), {});
  test.end();
});

tape('works for a simple translate', function(test) {
  var d = t.decompose;
  var transform = 'translate(0,0)';

  test.deepEqual(d(transform), {translate: 'translate(0,0)'});
  test.end();
});

tape('works for multiple transformations', function(test) {
  var d = t.decompose;
  var transform = 'translate(0,0) scale(1) rotate(90)';

  test.deepEqual(d(transform), {translate: 'translate(0,0)', scale: 'scale(1)', rotate: 'rotate(90)'});
  test.end();
});


tape('works for a simple translate as an array', function(test) {
  var d = t.decompose;
  var transform = 'translate(0,0)';

  test.deepEqual(d(transform, false), { translate: ['0', '0'] });
  test.end();
});

tape('works for multiple transformations as an array', function(test) {
  var d = t.decompose;
  var transform = 'translate(0,0) scale(1) rotate(90)';

  test.deepEqual(d(transform, false), { translate: ['0', '0'], scale: ['1'], rotate: ['90'] });
  test.end();
});