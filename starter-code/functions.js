// Question 1
function maxOfTwoNumbers(x, y) {
	if (x > y) {
		return x;
	}
	else if (y > x) {
		return y;
	}
	else if (x == y) {
		console.log("Values are equal.");
	}
}

// Question 2
function maxOfThree(x, y, z) {
	if (x > y && x > z) {
		return x;
	}
	else if (y > z && y > x) {
		return y;
	}
	else if (z > x && z > y) {
		return z;
	}
	else {
		console.log("At least two of these inputs are equal to the largest value.");
	}
}

// Question 3
function isCharacterAVowel(x) {
	if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
		return true;
	}
	else {
		return false;
	}
}

// Question 4
function sumArray(numbers) {
  var sum = 0;
  for(var x = 0; x <number.length; x++);
  	sum += numbers[x];
  }
  return sum;
}


// Question 4
function multiplyArray(numbers) {
  var product = numbers[0];
  for (var x = 1; x < numbers.length; x++) {
  	product *= numbers[x];
  }	
  return product;
}


// Question 5
var numberOfArguments = function(arguments){
  return arguments.length;  
}



// Question 6
var reverseString = function (string){
	var splitString = string.split('');
	var	revSplitString = [];
	for (var x = splitString.length -1; x >= 0; x--);
		revSplitString.push(splitString[x]);
    }
    return revSplitString;
};


// Question 7
function findLongestWord (string) {
	var longest = 0;
  	for (var x = 0; x < string.length; x++); {
  		if (string[x].length > longest); {
  		}
  	}
  	return longest;
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {
  
}

