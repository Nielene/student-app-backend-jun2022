// write a function that takes a string and a number
// and repeats the string n times
// with a space in the middle of each time.

function repeatNTimesWithSpace(string, n) {
  if(!string) return '';
  // return (string + " ").repeat(n);

  const arr = new Array(n).fill(string);
  return arr.join(' ');
}

function capitalizeFirstLetter(string) {
  if(!string) return '';
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = { repeatNTimesWithSpace, capitalizeFirstLetter };
