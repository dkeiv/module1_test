const arr = [];
let evenSum = 0;
let oddSum = 0;

while (arr.length < 20) {
  let n = +prompt('Nhập số phần tử của mảng ( nhập -1 để kết thúc):');
  if (n === -1) break;
  arr.push(n);
}

alert(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenSum += arr[i];
  } else {
    oddSum += arr[i];
  }
}

const res = evenSum - oddSum;

document.write(`Kết quả là: ${res}`);
