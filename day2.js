// 1. Declare a variable named challenge and assign it an initial value 'learn Javascript'.
let challenge = 'learn Javascript';

// 2. Print the string on the browser console using console.log().
console.log(challenge);

// 3. Print the length of the string on the browser console using console.log().
console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method.
console.log(challenge.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method.
console.log(challenge.toLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method.
let firstWord = challenge.substr(0, challenge.indexOf(' '));
// or
// let firstWord = challenge.substring(0, challenge.indexOf(' '));
console.log(firstWord);

// 7. Slice out the phrase 'Days Of JavaScript' from 'learn Javascript'.
let slicedPhrase = challenge.slice(6);
console.log(slicedPhrase);

// 8. Check if the string contains the word 'Script' using includes() method.
console.log(challenge.includes('Script'));

// 9. Split the string into an array using split() method.
let challengeArray = challenge.split('');
console.log(challengeArray);

// 10. Split the string 'learn Javascript' at the space using split() method.
let wordsArray = challenge.split(' ');
console.log(wordsArray);

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companiesArray = companies.split(', ');
console.log(companiesArray);

// 12. Change 'learn Javascript' to '30 Days Of Python' using replace() method.
let newChallenge = challenge.replace('Javascript', 'Python');
console.log(newChallenge);

// 13. What is the character at index 15 in 'learn Javascript' string? Use charAt() method.
console.log(challenge.charAt(15));

// 14. What is the character code of J in 'learn Javascript' string using charCodeAt()
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// 15. Use indexOf to determine the position of the first occurrence of 'a' in 'learn Javascript'.
console.log(challenge.indexOf('a'));

// 16. Use lastIndexOf to determine the position of the last occurrence of 'a' in 'learn Javascript'.
console.log(challenge.lastIndexOf('a'));

// 17. Use indexOf to find the position of the first occurrence of the word 'because'.
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// 18. Use lastIndexOf to find the position of the last occurrence of the word 'because'.
console.log(sentence.lastIndexOf('because'));

// 19. Use search to find the position of the first occurrence of the word 'because'.
console.log(sentence.search('because'));

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
let trimmedString = ' learn Javascript '.trim();
console.log(trimmedString);

// 21. Use startsWith() method with the string 'learn Javascript' and make the result true.
console.log(challenge.startsWith('learn'));

// 22. Use endsWith() method with the string 'learn Javascript' and make the result true.
console.log(challenge.endsWith('Javascript'));

// 23. Use match() method to find all the 'a's in 'learn Javascript'.
let aOccurrences = challenge.match(/a/g);
console.log(aOccurrences);

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, 'learn Javascript'.
let mergedString = '30 Days of '.concat('JavaScript');
console.log(mergedString);

// 25. Use repeat() method to print 'learn Javascript' 2 times.
let repeatedString = challenge.repeat(2);
console.log(repeatedString);
