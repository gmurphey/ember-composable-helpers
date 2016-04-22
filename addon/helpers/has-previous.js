import Ember from 'ember';
import { previous } from './previous';
import createNeedleHaystackHelper from '../-private/create-needle-haystack-helper';

let { isPresent } = Ember;

export function hasPrevious(array, currentValue) {
  return isPresent(previous(array, currentValue));
}

export default createNeedleHaystackHelper(hasPrevious);
