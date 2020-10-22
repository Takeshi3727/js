// const myFunction = () => {
//   const message = 'This is my message'
//   const printMessage = () => {
//     console.log(message)
//   }
//   return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()


const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++
    }, 
    decrement() {
      count--
    }, 
    get() {
      return count
    }
  }
}

const counter = createCounter()
counter.increment()
counter.decrement()
console.log(counter.get())

const add = (a, b) => a + b
const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))

const createTipper = (baseTip) => {
  return (amount) => {
    return baseTip * amount
  }
}

const tip15 = createTipper(.15)
const tip10 = createTipper(.1)
console.log(tip15(100))
console.log(tip15(500))
console.log(tip10(100))