exports.sortArray = (arr, key) => {
  arr.sort((a, b) => {
    const A = a[key].toUpperCase();
    const B = b[key].toUpperCase();
    if (A < B) {
      return -1;
    }
    if (A > B) {
      return 1;
    }
    return 0;
  });
};

exports.capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
