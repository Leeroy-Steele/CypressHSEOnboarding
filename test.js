function checkPreviousMatchWithResults(compareStrings) {
    let previousStrings = new Set();
    let results = compareStrings.map(str => {
      let isMatch = previousStrings.has(str);
      previousStrings.add(str);
      return { string: str, isMatch };
    });
  
    return results;
  }
  
  // Example usage
  const stringsToCompare = ["banana", "apple", "grape", "apple", "kiwi"];
  let result = checkPreviousMatchWithResults(stringsToCompare)
  console.log(result);
  // Output will show each string with its isMatch status
  




 let result2 = [
    {"string":"Johns Department","isMatch":false},
    {"string":"Johns Department 2","isMatch":false},
    {"string":"Johns Department 3","isMatch":false},
    {"string":"Johns Department","isMatch":true},
    {"string":"Johns Department 2","isMatch":true},
    {"string":null,"isMatch":false},
    {"string":null,"isMatch":true},
    {"string":null,"isMatch":true},
    {"string":null,"isMatch":true}]