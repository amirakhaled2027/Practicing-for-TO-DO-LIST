 // primitive number
let num = 42;

// wrapping the primitive number
let numWrapper = new Number(num); 

// using a method available on the Number wrapper object
console.log(numWrapper.toFixed(2)); 


function greet(name) {
    if (!name) {
      return; // Naked return, no value specified
    }
}


// Retrieves all elements with the class 'my-class'
const elements = document.querySelectorAll('.my-class'); 

// Output the number of elements in the NodeList
console.log(elements.length); 

// Access the first element in the NodeList
console.log(elements[0]); 

Array.from(elements).forEach((element) => {
  // Convert NodeList to an array and iterate over each element
  console.log(element.textContent);
});




document.querySelector('#myButton').addEventListener('click', function(e) {
    e.preventDefault(); // Prevents the default behavior of the click event
    console.log('Button clicked!');
  });



  