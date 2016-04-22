import isObject from '../utils/is-object';

export default function getIndex(array, currentValue) {
  let index;
  if (isObject(currentValue)) {
    index = array.findIndex((object) => {
      return JSON.stringify(object) === JSON.stringify(currentValue);
    });
  } else {
    index = array.indexOf(currentValue);
  }

  return index >= 0 ? index : null;
}
