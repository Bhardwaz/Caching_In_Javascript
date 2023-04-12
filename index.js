// Memoization : Note there are more techniques such as Memoization and time based expiration
const calc = (number) => {
  let sum = 0;
  for(let i=0; i <= number; i++){
    sum = sum + i
  }
  return sum
}

const memory = (calc) => {
    let cache = {}
    return function (...keys){
      let [key] = keys
      if(key in cache){
        return cache[key]
      }
      else{
        let result = calc(key)
        cache[key] = result
        return result
      }
    }
}
const memorycard = memory(calc)

console.time();
memorycard(100000000)
console.timeEnd();

console.time();
memorycard(100000000)
console.timeEnd();