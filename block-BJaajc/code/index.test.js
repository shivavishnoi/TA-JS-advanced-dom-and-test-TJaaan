let {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
} = require("./index");

test ("get full name", ()=>{
  expect(getFullName(`shivaji`, `vishnoi`)).toBe(`shivaji vishnoi`)
})

test("check if Palindrome", ()=>{
  expect(isPalindrome(`1221`)).toBe(true)
})

// test("check circumference", ()=>{
//   expect(getCircumference(2)).toBe(12.56)
// })