export function toMergedObject(oldObject: Object, newValues: any[]) {
  const names = Object.keys(oldObject);
  return newValues.reduce(
  (accumulator: Object, current: Object|undefined, index: number) => {
    const name = names[index];
    const slice = {[name]: current || oldObject[name]};
    return Object.assign(accumulator, slice);
  }, {});
}
