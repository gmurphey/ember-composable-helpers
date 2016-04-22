import { previous } from 'dummy/helpers/previous';
import { module, test } from 'qunit';

module('Unit | Helper | previous');

test('it returns null if the current value is the last element in the array', function(assert) {
  let result = previous([1, 2, 3, 4], 1);

  assert.equal(result, null, 'should return `null`');
});

test('it returns null if the given value is not in the array', function(assert) {
  let result = previous([1, 2, 3, 4], 5);

  assert.equal(result, null, 'should return `null`');
});
