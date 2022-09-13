let {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
} = require('./index');

test ("get full name", ()=>{
  expect(getFullName(`shivaji`, `vishnoi`)).toBe(`shiva vishnoi`)
})