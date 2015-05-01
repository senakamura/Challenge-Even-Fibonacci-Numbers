var challenge_2 = require('./../even_fib_nums.js');
var chai = require('chai');
var should = chai.should();

describe("Sum of even numbers in the Fibonnacci sequence", function () {

  it("should return the sum of all even Fibonacci numbers when given 10", function () {
    var sum = challenge_2.sumOfEvenFibonacciNumbers(34);
    sum.should.equal(44);
  });

  // when your tests pass, uncomment the next test and
  // change the expected value to the correct result

  it("should return the sum of all even Fibonacci numbers when given 4,000,000", function () {
    var sum = challenge_2.sumOfEvenFibonacciNumbers(4000000);
    sum.should.equal(4613732); // CHANGE THE VALUE OF 'X' to the correct number
  });

});