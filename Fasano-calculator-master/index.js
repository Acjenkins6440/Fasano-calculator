// Useful functions:
// document.querySelector => Accepts a css selector and returns the first element that matches.
// Ex: document.querySelector('#equals') will select an element with an id 'equals'

// document.querySelectorAll => Accepts a css selector and returns ALL matching elements
// Example below in document.addEventListener

// parseInt => Accepts a string and attempts to parse a number
// Ex: parseInt('123') will return the number 123
// Adding string numbers such as '123' + '123' will end up as '123123'
// parseInt('123') + parseInt('123') will equal 246

// toString => Number method, can be called on a number to transform it into a string
// Ex: 123.toString() returns '123'
// Notice that it can only be accessed from a number and accepts no arguments.

// split => String method, accepts an argument that it will split a string with.
// Ex: '2 + 2'.split('+') will return  ['2', '2']
// Notice that it can only be accessed from a string and returns an array

// includes => String method, accepts an argument and returns true if that argument appears in the string
// Ex: '2 + 2'.includes('+') returns true
// Ex: '2 + 2'.includes('/') returns false
const operatorArray = ['+','-','*','/']
document.addEventListener('DOMContentLoaded', function (event) {
  const numberButtons = document.querySelectorAll('button.number')
  const operatorButtons = document.querySelectorAll('button.operator')
  const clearButton = document.querySelector('button.clear')
  const equalButton = document.querySelector('button.equal')
  // set up button event listeners here
  numberButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const number = btn.attributes['data-value'].value
      if (operatorArray.some((oper) => displayValue == oper)){
        displayValue = number
        equation += number
      }
      else if (!displayValue.includes('.') ||
        (displayValue.includes('.') && number != '.')) {
        displayValue += number
        equation += number
      }
      updateDisplay()
    })
  })
  operatorButtons.forEach((btn) => {
    btn.addEventListener('click', () =>{
      const operator = btn.attributes['data-value'].value
      const equationIncludesOperator = operatorArray.some((oper) => equation.includes(oper))
      const displayValueIsOperator = operatorArray.some((oper) => displayValue.includes(oper))
      if (equationIncludesOperator && !displayValueIsOperator) {        
        calculate()
      }
      if (displayValueIsOperator) {
        displayValue = operator
        equation = equation.slice(0, equation.length - 1) + operator
      } else if(displayValue != "") {
        displayValue = operator
        equation += operator
      }
      updateDisplay()
    })
  })
  clearButton.addEventListener('click', () => {
    displayValue = ''
    equation = ''
    updateDisplay()
  })
  equalButton.addEventListener('click', () => {
    calculate()
    displayValue = equation
    updateDisplay()
  })

})
function updateDisplay() {
  document.querySelector('.display').innerHTML = displayValue
  console.log(equation)
}
function calculate() {
  if(equation.includes('+') ) {
    nums = equation.split('+')
    equation = add(nums)
  } else if (equation.includes('-')) {
    nums = equation.split('-')
    equation = subtract(nums)
  } else if (equation.includes('*')) {
    nums = equation.split('*')
    equation = multiply(nums)
  } else if (equation.includes('/')) {
    nums = equation.split('/')
    equation = divide(nums)
  }
}
function add(nums) {
  const result = parseFloat(nums[0]) + parseFloat (nums[1])
  return result.toString()
}
function subtract(nums) {
  const result = parseFloat(nums[0]) - parseFloat(nums[1])
  return result.toString()
}
function multiply(nums) {
  const result = parseFloat(nums[0]) * parseFloat(nums[1])
  return result.toString()
}
function divide(nums) {
  const result = parseFloat(nums[0]) / parseFloat(nums[1])
  return result.toString()
}
var equation = ''

var displayValue = ''
