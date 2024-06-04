///////////////////////////////////////////////////////////////
/////////////////////////
//1. Creating a Lesson Plan (Using for loop )



//  Step 01     Create an empty array to hold lesson objects
const myWork: { name: string; status: boolean }[] = [];

//  Step 02       Use a for loop to create lessons
for (let i =1; i <= 10 ; i++) {
    let lesson = {
        name: `lesson ${i}`,
        status: i % 2 !==0  //Alternate status: (true for odd, false for even).
    } ;
    // Step 03
    // Add the lesson to the array
    myWork.push(lesson);
}
// Print the result
console.log(myWork);

/*2. Guessing Game (Using while loop )
Objective: Create a simple number guessing game where the user tries to guess a randomly
generated number between 1 and a specified maximum value using a predefined set of guesses.
Steps to Follow:
1. Set a maximum value: Create a variable to store the maximum value for the number
guessing game.
2. Generate a random number: Use Math.random() and Math.floor() to generate a
random number between 1 and the maximum value. Log this value to the console for
development purposes.
3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
it to false initially.
4. Simulate user guesses: Use an array to store a series of predefined guesses.
5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
correct guess is made. 
6. Check the user's guess: Inside the loop, check if the current guess matches the random
number. Provide feedback if the guess is too high or too low.*/

// Step 01
const maxNumber = 100; // Set the maximum value
// Step 02
const randomNumber = Math.floor(Math.random() * maxNumber) + 1; // Generate a random number
console.log(`Random Number (for development purposes): ${randomNumber}`);

//Step 03 Track the guess status
let guessCorrect: boolean = false;
// Step 04 Stimulate user guesses
const predefinedGuesses = [42, 75, 88, 50]; // Predefined guesses (you can customize this)

let correctGuess = false;
let attempts = 0;
//Step 05 terate over guesess using a while loop

while (!guessCorrect && attempts < predefinedGuesses.length) {
    const userGuess = predefinedGuesses[attempts];
    if (userGuess === randomNumber) {
        console.log(`Congratulations! You guessed the correct number: ${randomNumber}`);
        correctGuess = true;
    } else {
        console.log(`Try again! Your guess (${userGuess}) is ${userGuess < randomNumber ? 'too low' : 'too high'}.`);
        attempts++;
    }
}
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
//////////////////3. Counter Incrementer (Using do while loop )
// Step 1 : Set  the starting counter to 0


let counter = 0;
const step = 10; // Specify the step value

do {
    console.log(`Counter value: ${counter}`);
    counter += step;
} while (counter < 100);
const myObject = {
    item1: 'Apple',
    item2: 'Banana',
    item3: 'Cherry',
};

for (let  key in myObject) {
    if (myObject.hasOwnProperty(key))
         {
        console.log(`${key}: ${myObject[key]}`);
    }
}
const myArray: number[] = [];

for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}

console.log(myArray);

for (let f=0 ;f< myArray.length ;f++){
    console.log('Index :${f},value: ${numberArray{f}');
};

for (let value in myArray){
    console.log(value);
};