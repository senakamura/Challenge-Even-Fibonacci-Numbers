exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  var fib = [];

  fib[0] = 0;
  fib[1] = 1;
  for (var i = 2; i < Infinity; i++) {
    // fib[i] = fib[i-2] + fib[i-1];
    // console.log(fib[i]);
    var newFib = fib[i-2] + fib[i-1];
    if ( newFib > n) {
      break;
    }else{
      fib[i] = newFib;
    }
  }
  // console.log(fib);
  for (var j = 0; j < fib.length; j++) {
    if (fib[j] % 2 === 0){
      sum += fib[j];
      console.log(sum);
    }

  }

  return sum;
};