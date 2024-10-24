let n = prompt('ВВедите число');
let nextPrime

if (n<=1) {
  nextPrime = `число ${n} не является ни составным, ни простым числом`
} else {

  for (let i = 2; i < n; i++) {
   
    
    if (n % i == 0) {
      nextPrime = `Число ${n} не является простым`; break
    }
    
  }
  if (!nextPrime)  {
    nextPrime = `Число ${n} является простым`
  
  }
}

console.log(nextPrime)