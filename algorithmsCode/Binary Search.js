function binarySearch(arr, ele, start = 0, end = arr.length - 1) {
  if (ele > arr[end] || ele < arr[start]) {
    console.log("not In the array");
    return "not found";
  }
  let mid = Math.round((end + start) / 2);
  console.log(`Searching at index ${mid}`);
  console.log(`Found ${arr[mid]}`);
  if (start > end) {
    console.log("not In the array");
    return "not found";
  }
  if (ele === arr[mid]) {
    console.log(`found ${ele} at position ${mid}`);
    console.log(`---------------------`);
    return `found ${ele} at position ${mid}`;
  } else if (ele > arr[mid]) {
    console.log(`searching the right half`);
    binarySearch(arr, ele, mid + 1, arr.length - 1);
  } else {
    console.log(`searching the left half`);
    binarySearch(arr, ele, 0, mid - 1);
  }
}

export default binarySearch;
