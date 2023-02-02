function mergeSort(array) {
  // Base case
  if (array.length === 1) {
    return array;
  }

  if (array.length !== 2) {
    // Break down array
    const a = mergeSort(array.slice(0, Math.floor(array.length / 2)));
    const b = mergeSort(array.slice(Math.floor(array.length / 2)));

    // Sort
    const sorted = [];
    for (const number of array) {

      // If arrays uneven
      if (a.length === 0) {
        sorted.push(b.shift());
        continue;
      }
      if (b.length === 0) {
        sorted.push(a.shift());
        continue;
      }

      // Sorting
      if (b[0] < a[0]) {
        sorted.push(b.shift());
      } else {
        sorted.push(a.shift());
      }
    }
    return sorted;
  }

  // Check for sorted
  if (array[0] < array[1]) {

    // If already sorted
    return array;
  } else {

    // Flip pieces
    array.push(array.shift());
    return array;
  }
}
