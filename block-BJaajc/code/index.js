function getFullName(firstName, lastName) {
  let fullName = firstName + '' + lastName;
  return fullName;
}

function isPalindrome(input) {
  if (typeof input == `string`) {
    return input === [...input.split('')].reverse().join('');
  } else if (Array.isArray(input)) {
    return JSON.stringify(input) == JSON.stringify(input.reverse());
  } else {
    return `not a valid input`;
  }
}

function getCircumference(radius) {
  return `The circumference is ${2 * 3.14 * radius}`;
}

function getArea(radius) {
  return `The area is ${3.14 * radius ** 2}`;
}

modules.exports = {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
};
