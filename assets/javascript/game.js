// variables

//To keep track of the number of guesses avaliable
let guessCount = 9;
//The guess from the computer that is randomly generated using Math.random
let letter;
//Store the user's guess, check if it is the same as the computer's choice and if not it will add it to the guesses array and wait for the user to guess again
let userGuess;
//Keep track of if the user correctly guessed the computer's letter
let win = 0;
//Keep track of if the users couldn't guess in 9 attempts
let loss = 0;
//array that will have all the guesses tried
let guesses= [ ];
//array of the possible options for the computer to choose from. will exculde all capital letters and make sure the users guess is always lower case
const abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// Sets up what happens when the user pushes a key
//on the key up event the key pushed will be stored in userGuess

    document.onkeyup = function(event){
        userGuess = event.key;
        userGuess = userGuess.toLowerCase();
        //This triggers the computer to randomly select a string from array abc
    
    // if (abc.includes(letter)){

    // }
    // else {
    //     alert('enter a letter');
    // }
        if (letter === undefined){
    
        letter = abc[Math.floor(Math.random()*abc.length)];
    
        }
        
        if (userGuess != 0){
    
            if (userGuess === letter){
                win++;
                guessCount = 9;
                letter = undefined;
                guesses = [ ];
    
                alert('You win!');
            }
            else {
                if(guesses.includes(userGuess)){
                    alert('Already guessed');
                }
                else {
                loss++;
                guessCount--;
                guesses.push(userGuess);
                console.log(' win ' + win + ' lose ' + loss + ' guesses ' + guesses + ' guess count ' + guessCount);
                console.log(letter);
                }
            }
            // if guesscount = 0 then the guess count is set to 9 and the loop starts again
        if (guessCount === 0) {
            guessCount = 9;
            guesses = [];
            letter = undefined;
            console.log('guesscount ' + guessCount + ' guesses ' + guesses + ' win ' + win + ' losses ' + loss);
        }
    }
    }







// Still need to add something so you can't guess with anything other than letters - Make sure the guess is included in the abc array and if not then give back an error saying a letter must be guessed

// computer generates a random letter(use Math.random()?) which is stored in letter variable
//player presses a letter key as a guess
//check to see if the userGuess is the same as letter
//if it is the same then win count will increase by 1
//if not then the guessCount will go down by 1
//put guesses in the guesses variable until the game resets then it clears
//process starts again
//goes until the guessCount = 0 and then the game will reset
//array with the letters in it or generate a random number from 0-25 and that is the letter it picks from the array - this is the computer's guess