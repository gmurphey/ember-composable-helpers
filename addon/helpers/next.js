import Ember from 'ember';
import getIndex from '../utils/get-index';
import createNeedleHaystackHelper from '../-private/create-needle-haystack-helper';

let { isPresent } = Ember;

export function next(array, currentValue) {
  let currentIndex = getIndex(array, currentValue);
  return isPresent(currentIndex) ? array[currentIndex + 1] : null;
}

export default createNeedleHaystackHelper(next);
