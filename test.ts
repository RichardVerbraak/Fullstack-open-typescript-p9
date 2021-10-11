// The type keyword allows you to make a type 'alias' aka giving your type a name
// A union type is used when a type has values that can overlap
type Operation = 'add' | 'multiply' | 'divide'

// I used a switch case instead of multiple if/else statements here
const calculator = (a: number, b: number, operation: Operation) => {
	switch(operation) {
		case 'add':
			return a + b
			
		case 'multiply':
			return a * b
			
		case 'divide':
			return b !== 0 ? a / b : 'cannot divide by zero'
			
	}
}

console.log(calculator(2, 4, 'divide'))
