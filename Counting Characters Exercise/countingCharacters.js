function countingCharacters(stringToCount) {
  console.log(stringToCount + " has " +
              stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind){
  var characterCount = 0;
  for (var characterPosition = 0;
          characterPosition < stringToCount.length;
          characterPosition++)
  {
    if(stringToCount[characterPosition] == characterToFind)
    {
      characterCount++;
    }
  }
  console.log("String to search in: " + stringToCount);
  console.log("Charcter to find: " + characterToFind);
  console.log("Number of time the character appears: " + characterCount);
}

function countingCharacters3 (str, search)
{
  var count = 0;
  var numChars = search.length;
  var lastIndex = str.length - numChars;
  for (var index = 0; index <= lastIndex; index++)
  {
    var current = str.substring(index, index + numChars);
    current == search ? count++ : undefined;
  }
  console.log("String to search in: " + str);
  console.log("Characters to find: " + search);
  console.log("Number of times the characters appear: " + count);
}

function countingCharacters4 (str, search)
{
  var count = 0;
  var numChars = search.length;
  var lastIndex = str.length - numChars;
  for (var index = 0; index <= lastIndex; index++)
  {
    var current = str.substring(index, index + numChars);
    current == search ? count++ : undefined;
  }
return count;
}