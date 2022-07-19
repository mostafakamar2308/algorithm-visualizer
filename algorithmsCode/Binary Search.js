let timer;
function binarySearch(arr, ele, start = 0, end = arr.length) {
  // If the item does not exist, return not found
  if (end < start) return "not found";

  // Calculate middle index of the array
  let middle = Math.floor((start + end) / 2);
  console.log(`searching for ${ele} at index ${middle}`);

  // Is the middle a match?
  if (arr[middle] === ele) {
    console.log(`found ${ele} at index ${middle}`);
    console.log(`-------------------------------------------------`);
    return middle;
  }
  // Is the middle less than x
  if (arr[middle] < ele) {
    console.log(`Didn't find ${ele} at index ${middle}`);
    timer = setTimeout(() => {
      console.log(`searching the right half`);
      binarySearch(arr, ele, middle + 1, end);
    }, 1000);
  }
  // Else the middle is more than x
  else {
    timer = setTimeout(() => {
      console.log(`Didn't find ${ele} at index ${middle}`);
      console.log(`searching the left half`);
      binarySearch(arr, ele, start, middle - 1);
    }, 1000);
  }
}

export default binarySearch;
