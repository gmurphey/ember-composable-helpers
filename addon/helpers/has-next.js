import Ember from 'ember';
import { next } from './next';
import createNeedleHaystackHelper from '../-private/create-needle-haystack-helper';

let { isPresent } = Ember;

export function hasNext(array, currentValue) {
  return isPresent(next(array, currentValue));
}

export default createNeedleHaystackHelper(hasNext);
