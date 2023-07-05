import generateFizzBuzz from "./skeleton";

test("returns an array with FizzBuzz replacement", () => {
  expect(generateFizzBuzz(3)).toEqual([1,2,"Fizz"]);
});


test("returns an array with FizzBuzz replacement", () => {
  expect(generateFizzBuzz(5)).toEqual([1,2,"Fizz", 4, "Buzz"]);
});

test("returns an array with FizzBuzz replacement", () => {
  expect(generateFizzBuzz(15)).toEqual([1,2,"Fizz", 4, "Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]);
});
