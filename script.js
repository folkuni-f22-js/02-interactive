import { question } from 'readline-sync'

// Exempel, för övningarna
let name = question('Who are you? ')
console.log('Welcome ' + name + '!')  // traditionell
console.log(`Welcome ${name}!`)   // template string

let city = question('Where do you live? ')
if( city == 'Karlstad' ) {
	console.log(`Welcome ${name} from ${city}!`)
} else {
	console.log(`Welcome ${name}! Have you considered to move to Karlstad?`)
}

let input = ''
while( input != 'n' ) {
	input = question('Do you want to stay in the loop? ')
}


// let answer = question('What is your favorite color?')
// console.log(answer)

// let x = Number(question('What is your favorite number?'))
// console.log(x)
