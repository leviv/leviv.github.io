var squareSize = 5; // width and height of the square matrices we are dealing with

// Define the matrices used for encryption/decryption
var topSquareDecrypt = new Array(squareSize);
var bottomSquareDecrypt = new Array(squareSize);
var topSquareEncrypt = new Array(squareSize);
var bottomSquareEncrypt = new Array(squareSize);

/*
 * Add handlers for encrypt and decrypt buttons
 * Run only when page has loaded
 */
$(document).ready(function(){

  // handle click for decrypt button
  $(".decrypt-form button").on("click", function(){
    decryptPrep();
  });

  // handle click for encrypt button
  $(".encrypt-form button").on("click", function(){
    encryptPrep();
  });
});

/*
 * Function to fetch and parse data for decyption
 */
function decryptPrep(){
  // Initialize the 2d array
  for(var i = 0; i < squareSize; i++){
    topSquareDecrypt[i] = new Array(squareSize);
    bottomSquareDecrypt[i] = new Array(squareSize);
  }

  // Grab the user entered values
  var key1 = parse($("input#decrypt-keyword1").val());
  var key2 = parse($("input#decrypt-keyword2").val());
  var text = parse($("input#decrypt-text").val());

  // If the text entered is an odd number
  if (text.length % 2 == 1){
    text += 'z';
  }

  decrypt(key1, key2, text);
}

/*
 * Function to fetch and parse data for encryption
 */
function encryptPrep(){
  // Initialize the 2d array
  for(var i = 0; i < squareSize; i++){
    topSquareEncrypt[i] = new Array(squareSize);
    bottomSquareEncrypt[i] = new Array(squareSize);
  }

  // Grab the user entered values
  var key1 = parse($("input#encrypt-keyword1").val());
  var key2 = parse($("input#encrypt-keyword2").val());
  var text = parse($("input#encrypt-text").val());

  // If the text entered is an odd number
  if (text.length % 2 == 1){
    text += 'z';
  }

  encrypt(key1, key2, text);
}

/*
 * Function to encrypt the data
 */
function encrypt(key1, key2, text){
  // Alter the correct grid
  var topSquare = $("#encrypt-container .top-grid")
  var bottomSquare = $("#encrypt-container .bottom-grid")

  key1 = buildKey(key1, topSquare, topSquareEncrypt);
  key2 = buildKey(key2, bottomSquare, bottomSquareEncrypt);

  var encryptedText = solveSquares(topSquareEncrypt, bottomSquareEncrypt, text);

  // Display and return the result
  $('#encrypt-result span').html(encryptedText);
  return encryptedText;
}


/*
 * Function to decrypt the data
 */
function decrypt(key1, key2, text){
  // Alter the correct grid
  var topSquare = $("#decrypt-container .top-grid")
  var bottomSquare = $("#decrypt-container .bottom-grid")

  key1 = buildKey(key1, topSquare, topSquareDecrypt);
  key2 = buildKey(key2, bottomSquare, bottomSquareDecrypt);

  var decryptedText = solveSquares(topSquareDecrypt, bottomSquareDecrypt, text);

  // Display and return the result
  $('#decrypt-result span').html(decryptedText);
  return decryptedText;
}

/*
 * Function to encrypt/decrypt text, given the two squares
 */
function solveSquares(topSquare, bottomSquare, text){
  var resultText = "";

  // Loop through the given text
  for(var i = 0; i < text.length; i+=2){

    // Retrive and find the position of the next 2 characters
    var curLetter = text.charAt(i);
    var nextLetter = text.charAt(i+1);

    var firstLetterPos = findLetter(topSquare, curLetter);
    var secondLetterPos = findLetter(bottomSquare, nextLetter);

    // Find the letters that the text maps to
    var firstLetterMap = topSquare[firstLetterPos[0]][secondLetterPos[1]];
    var secondLetterMap = bottomSquare[secondLetterPos[0]][firstLetterPos[1]];

    resultText = resultText + firstLetterMap + secondLetterMap;
  }

  return resultText;
}

/*
 * Function to find the position of a letter in the matrix
 * return in the form [row,col], return [-1,-1] if not found
 */
function findLetter(matrix, letter){
  for(var r = 0; r < squareSize; r++){
    for(var c = 0; c < squareSize; c++){
      if(matrix[r][c] == letter){
        return [r,c];
      }
    }
  }
  return [-1,-1];
}

/*
 * Function to build a key based on cipher requirements
 */
function buildKey(key, square, matrix){
  var finalKey = "";

  // Loop through the string we're given
  for(var i = 0; i < key.length; i++){
    var curLetter = key.charAt(i);

    // Ignore duplicates in the key
    if(finalKey.indexOf(curLetter) == -1){
      finalKey += curLetter;
    }
  }

  // Loop from lowecase a to z
  for(var i = 97; i < 123; i++){
    var curLetter = String.fromCharCode(i);

    // Check if the letter is already in the string
    // Also make sure we don't add q
    if(finalKey.indexOf(curLetter) == -1 && curLetter != 'q'){
      finalKey += curLetter;
    }
  }

  buildCharArray(finalKey, square, matrix)

  return finalKey;
}

/*
 * Function to build the char array used to decrypt
 *
 */
function buildCharArray(key, square, matrix){
  var counter = 0;

  // Loop through all 25 html elements
  square.find($(".letter")).each(function(i, obj) {
    // Put the letter in the html
    var curLetter = key.charAt(counter);
    $(this).html(curLetter);

    //build the array
    matrix[Math.floor(counter / squareSize)][counter % squareSize] = curLetter;
    counter++
  });
}

/*
 * Parse a single string
 * Remove all non-alpha characters and remove g
 */
function parse(stringToParse){
  stringToParse = stringToParse.toLowerCase(); // Convert uppercase
  stringToParse = stringToParse.replace(/[^a-z]/g,""); // Only alphanumeric
  return stringToParse.replace(/q/g, ''); // Strip q's
}
