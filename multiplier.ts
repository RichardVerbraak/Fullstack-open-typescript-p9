// TS's interface keyword is a way to define the shape an object should have
// In this case the return value should be an object with 2 properties both of type number
interface MultiplyValues {
    value1: number;
    value2: number;
}

// Checks the length of the args and if there not NaN
const checkArguments = (args: Array<string>): MultiplyValues => {
    if(args.length < 4) throw new Error('Not enough arguments');
    if(args.length > 4) throw new Error('Too many arguments');

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        }
    } else {
        throw new Error('One or both of the arguments is not a number');
    }
}

const multiplicator = (a: number, b: number, someText: string) => {
    console.log(someText, a * b);
}

try {
    const {value1, value2} = checkArguments(process.argv)
    multiplicator(value1, value2, `the result of multiplying ${value1} by ${value2} is:`);
} catch (error: any) {
    console.log('Something went wrong:', error.message);
}

//! This was before implementing the checkArguments function
// If running 'npm run multiply 2 lol' you would get --- the result of multiplying 2 by NaN is: NaN
// This is because Number('lol') results in NaN, NaN is still of type number (classic javascript!)

// const a: number = Number(process.argv[2])
// const b: number = Number(process.argv[3])
// multiplicator(a, b, `the result of multiplying ${a} by ${b} is:`)