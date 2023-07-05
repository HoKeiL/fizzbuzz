type arrayValueType = "Fizz"|"Buzz"|"FizzBuzz"|number

/**
 * function: generateFizzBuzz
 * Adds together two numbers
 * @param a -  number N
 * 
 * @returns array 1 to N containing numbers or string 
 */

function generateFizzBuzz(n: number): arrayValueType[] {
  const outputArray:arrayValueType[] = [];

  for(let i=1; i<=n;i++){
    if(i % 3 === 0 && i % 5 === 0){
      outputArray.push("FizzBuzz")
    } else if (i % 5 === 0){
      outputArray.push("Buzz")}
      else if (i % 3 === 0){
      outputArray.push("Fizz")}
    else { 
      outputArray.push(i)
    }
   
  }

  return outputArray;
}

export default generateFizzBuzz;
