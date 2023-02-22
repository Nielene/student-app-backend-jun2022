// write a function that takes a string and a number
// and repeats the string n times
// with a space in the middle of each time.

function repeatNTimesWithSpace(string, n) {
  return (string + " ").repeat(n);
}

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = { repeatNTimesWithSpace, capitalizeFirstLetter };
