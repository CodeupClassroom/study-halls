# Study Hall

## Local Storate

- local vs session
- a way to persist data between page loads (normally everything in memory is
  blown away)
- can be thought of as an object where only strings are allowed for the values
- persisting a data structure (i.e. not a primitive type, e.g. arrays and
  objects) requires serialization + deserialization
- methods:
    - `getItem`
    - `setItem`
    - `removeItem`

Example

```js
var coffees
var storage = window.localStorage
var persistedCoffees = storage.getItem('coffees')

// check to see if we have any data (.getItem will return `null` if the supplied
// key is not found)
if (persistedCoffees) {
    // use the data we had previously stored
    coffees = JSON.parse(persistedCoffees)
} else {
    // set the default value
    coffees = [{name: '...', roast: '...'}]
}

// .......


// adding a new coffee
var newCoffee = {
    name: document.querySelector('#new-coffee-name').value,
    roast: document.querySelector('#new-coffee-roast').value
}
coffees.push(newCoffee)
storage.setItem('coffees', JSON.stringify(coffees))
```

- [See also the guide from MDN here][local-storage-guide]

[local-storage-guide]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API


## Array Element Access

```js
var numbers = [1, 2, 3, 4, 5]

var anElement = numbers[2]

// creating an array based on numbers, but with only even numbers

// 1. start with an new empty array
var evenNumbers = []

// 2. loop through the array and "look at" each element
number.forEach(function(number) {
    // 3. if the given element meets our criteria, add it to the new array
    if (number % 2 === 0) {
        evensNumbers.push(number)
    }
})

// done! evenNumbers has all the even numbers
```

document.getElementBy.... is for DOM manipulation
