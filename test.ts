// TypeScript expects all globally used variables to be 'typed' as in, complying to TS rules
// The DefinitelyTyped community are maintaining most of the npm packages to also have a typed variant (React, node etc.)
// For example, the process global variable from Node (process.argv etc.) is not accessible without installing said npm ts package

// You can install them by prefixing it with @types/*insert package name here*
// Always save these to dev dependecies since TS is only before compilation, production will run the build made from said TS files aka using regular compiled JS


// The type keyword allows you to make a type 'alias' aka giving your type a name
// A union type is used when a type has values that can overlap
type Operation = 'add' | 'multiply' | 'divide'
type Result = number

// I used a switch case instead of multiple if/else statements here
const calculator = (a: number, b: number, operation: Operation) : Result => {
	switch(operation) {
		case 'add':
			return a + b
			
		case 'multiply':
			return a * b
			
		case 'divide':
			if(b === 0) throw new Error('Cannot divide by zero')
			return a / b

		default: 
			throw new Error('Operation is not add, multiply or divide')
	}
}

console.log(calculator(2, 4, 'divide'))
