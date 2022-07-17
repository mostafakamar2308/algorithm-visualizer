let arr = [1, 3, 5, 7, 9, 11, 13, 15];

function binarySearch(arr, ele, start = 0, end = arr.length - 1) {
  if (ele > arr[end] || ele < arr[start]) {
    console.log("not In the array");
    return "not found";
  }
  let mid = Math.floor((end + start) / 2);
  console.log(mid);
  if (start > end) {
    console.log("not In the array");
    return "not found";
  }
  if (ele === arr[mid]) {
    console.log(`found ${ele} at position ${mid}`);
    return `found ${ele} at position ${mid}`;
  } else if (ele > arr[mid]) {
    binarySearch(arr, ele, mid + 1, arr.length - 1);
  } else {
    binarySearch(arr, ele, 0, mid - 1);
  }
}
binarySearch(arr, 12);
