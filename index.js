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

document.addEventListener('DOMContentLoaded', function (event) {
  // set up button event listeners here

  // We do this here because we have to wait for the DOM content (all HTML elements) 
  // to load before we make adjustments to it.

  // Example of how to get all the number buttons.
  // In order for this to work, you will have to add the 'number' class to each number button
  const numberButtons = document.querySelectorAll('button.number') 
})

// total is the number that appears after calculating. 
// Ex: If we enter 2 + 2 and hit the = button, the total should be 4, and shown in the display
var total = 0

// equation is the operation we are building. Hitting 2 should set equation to '2', then hitting + 
// should set the equation to '2+' then 2 again should s                        et it to '2+2'
var equation = ' '

// This function should trigger when a number is pressed (The decimal should be treated as a number)
function numberButtonPress(number) {

}
// This function should trigger when an operator is pressed
function operatorButtonPress(operator) {

}

// This function should trigger when equal is pressed
function calculate() {
  // Use equation to calculate 
  // Separate the numbers 
}
