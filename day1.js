    // day2

    // 2
    var lastName="zara";
    console.log(lastName)
    // 3
    let a="hello";
    console.log(a.length);
    // 4
    let originalString = "Hello, World!";
     let upperCaseString = originalString.toUpperCase();

     console.log(upperCaseString); 
    //  5
    let lowerCaseString = originalString.toLowerCase();
    console.log(lowerCaseString);
    // 6
    let remainingString = originalString.substr(originalString.indexOf(' ') + 1);
    console.log(remainingString);
    // 7
    let oString = "learn JavaScript";
     let slicedPhrase = oString.substring(6, 23);

     console.log(slicedPhrase); 
    //  8
    let searchString = "learn JavaScript";

     if (searchString.includes("Script")) {
    console.log("The string contains the word 'Script'.");
        } 
     else {
    console.log("The string does not contain the word 'Script'.");
     }
    //  9
    let String = "learn JavaScript";
    let stringArray = String.split(' ');
    
    console.log(stringArray);
    // 10
    
    let Array = String.split(' ');

     console.log(Array);
    //  11
    let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
    let companiesArray = companies.split(', ');

     console.log(companiesArray);
    // 12
    let original = 'learn Javascript';
    let modifiedString = original.replace('Javascript', '30 Days Of Python');

    console.log(modifiedString);


    let String1 = 'learn Javascript';
    let characterAtIndex15 = String1.charAt(15);

    console.log(characterAtIndex15);


    let originalString1 = 'learn Javascript';
    let charCodeOfJ = originalString1.charCodeAt(originalString.indexOf('J'));

    console.log(charCodeOfJ);

    let originalString2 = 'learn Javascript';
    let positionOfA = originalString2.indexOf('a');

    console.log(positionOfA);


    let originalString3 = 'learn Javascript';
    let lastPositionOfA = originalString3.lastIndexOf('a');

    console.log(lastPositionOfA);


    let sentence1 = 'You cannot end a sentence with because because because is a conjunction';
    let positionOfBecause = sentence1.indexOf('because');

    console.log(positionOfBecause);


    let sentence = 'You cannot end a sentence with because because because is a conjunction';
    let lastPositionOfBecause = sentence.lastIndexOf('because');

    console.log(lastPositionOfBecause);


    let stringWithWhitespace = ' learn Javascript ';
    let trimmedString = stringWithWhitespace.trim();

    console.log(trimmedString);

    let testString1 = 'learn Javascript';
    let startsWithLearn = testString1.startsWith('learn');

    console.log(startsWithLearn);

    let testString = 'learn Javascript';
    let endsWithJavascript = testString.endsWith('Javascript');

    console.log(endsWithJavascript);

    let firstPart = '30 Days of';
    let secondPart = 'JavaScript';
    let concatenatedString = firstPart.concat(' ', secondPart);

    console.log(concatenatedString);

    let originalString4 = 'learn Javascript';
    let repeatedString = originalString4.repeat(2);

    console.log(repeatedString);


