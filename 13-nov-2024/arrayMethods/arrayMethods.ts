// Array Methods in TypeScript

// Array Methods:
// 1. Push
// 2. Pop
// 3. Unshift
// 4. Shift
// 5. Map
// 6. Filter
// 7. Reduce
// 8. Slice
// 9. Splice
// 10. forEach

let arr: number[] = [1, 2, 3, 4, 5, 6, 10];

console.log("orignalArray-> " + arr);
arr.push(11);

arr.pop();

let sum: number = 0;

sum = arr.reduce((sum: number, currVal: number) => {
  return sum + currVal;
}, 0);
console.log("using reduce funtion the sum is " + sum);

arr.unshift(0);
console.log("Result after unshift of value 0 is " + arr);

arr.shift();
console.log("Result after shifting of array is " + arr);

arr = arr.map((item) => {
  return item * 2;
});
console.log("after using forEach for doubling the elements ->" + arr);

console.log(
  "Filering all the odd elements ->" + arr.filter((item) => item % 2 != 0)
);
console.log(arr.length);

console.log("slicing from index from 1 to 5 ->" + arr.slice(1, 5));

console.log("Using forEach for printing every element of the array");
arr.forEach((item) => {
  console.log(item);
});

console.log("splicing from index from 1 to 5 ->" + arr.splice(1, 5));
console.log(arr);
export {};
