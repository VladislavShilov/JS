"use strict";

function getData() {
    let num = document.getElementById("num").value;
    document.getElementById("result").innerHTML = "Результат: "+ getPrimesFor(num);
}

function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// Bruteforce
function getPrimesFor(num) {
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}
