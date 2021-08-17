export function checkInput(data) {
  for (let item in data) {
    if (typeof data[item] == 'string') {
      if (!data[item].trim()) {
        return false;
      }
    }
  }
  return true;
}
