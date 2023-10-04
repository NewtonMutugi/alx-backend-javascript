function hasValuesFromArray(set, arr) {
  if (set instanceof Set && arr instanceof Array) {
    return arr.every((value) => set.has(value));
  }
}

export default hasValuesFromArray;
