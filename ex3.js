const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

function findPrime(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      res.push(arr[i]);
    }
  }

  return res.sort((a, b) => a > b);
}

// display
const a = [4, 3, 2, 1];
console.log(findPrime(a));
