import { next } from 'dummy/helpers/next';
import { module, test } from 'qunit';

module('Unit | Helper | next');

test('it returns null if the current value is the last element in the array', function(assert) {
  let result = next([1, 2, 3, 4], 4);

  assert.equal(result, null, 'should return `null`');
});

test('it returns null if the given value is not in the array', function(assert) {
  let result = next([1, 2, 3, 4], 5);

  assert.equal(result, null, 'should return `null`');
});
