const multiplicator = (a: number, b: number, someText: string) => {
   console.log(someText, a * b)
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a, b, `the result of multiplying ${a} by ${b} is:`)