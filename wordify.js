function integerToArray(integerToConvert) {
	//accepts an integer  and returns an array of strings for each decimal place

	//convert integer to string
	var stringOfInteger = integerToConvert.toString();
	//convert string to array
	var arrayOfInteger = stringOfInteger.split('');
	return arrayOfInteger;
};



function charToWord (digit, data) {
	var prefix = 'val';
	var property = prefix + digit;
	property = prefix + digit;
	return data[property];
};

function wordify(integer) {

	//validate integer
	if (integer !==  parseInt(integer)) {
		console.log("The value entered, '"+ integer + "', was not an integer. Please enter an integer.");
		return;
	} else {

		var intArray = integerToArray(integer); //each decimal broken into a separate element
		var length = intArray.length;
		var intAsText = ""; // the string we will return
		var isTeen = false; // flag for skipping tens place when digit is a teen

		//loop through each decimal place and construct a word
		for (var i = 0; i < length; i++) { 
			var label = " ";
			var decimalPlace =  length - i;
			var thisChar = intArray[i];
			var data = baseData;
			var decimalType  = decimalPlace % 3; // determine what type of decimal place (ones, tens hundreds)
			var thisWord = "";
			var suffix = "";
			var space = " ";

			if (decimalType === 2) { //we are in a tens type decimal place
				if (thisChar !== '1') {
					data = tensData;
				} else {
					isTeen = true;
					thisChar = '0';
				}
			} else if (decimalType === 1 && isTeen) {
				data = teensData;
				isTeen = false;
			} else if (decimalType === 0 ) {
				suffix =  " hundred and";
			}

			thisWord = charToWord(thisChar, data) + suffix;

			switch (decimalPlace) {
				case 4: 
					label = " thousand"
					break;
				case 7: 
					label = " million"
					break;
				default:
					label = "";
			}
			if (length === i+1) {
				space = "";
			}
			if (thisChar !== '0') {
				intAsText = intAsText + thisWord + label + space;
			}

 		};
 		return intAsText;
	}
	return;
};

var baseData = {
	val0: "",
	val1: "one",
	val2: "two",
	val3: "three",
	val4: "four",
	val5: "five",
	val6: "six",
	val7: "seven",
	val8: "eight",
	val9: "nine"
};

var tensData = {
	val0: "",
	val2: "twenty",
	val3: "thirty",
	val4: "forty",
	val5: "fifty",
	val6: "sixty",
	val7: "seventy",
	val8: "eighty",
	val9: "ninety"
};

var teensData = {
	val0: "",
	val1: "eleven",
	val2: "twelve",
	val3: "thirteen",
	val4: "fourteen",
	val5: "fifteen",
	val6: "sixteen",
	val7: "seventeen",
	val8: "eighteen",
	val9: "nineteen"
};