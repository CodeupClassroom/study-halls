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
let coffees
let storage = window.localStorage
let persistedCoffees = storage.getItem('coffees')

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
let newCoffee = {
    name: document.querySelector('#new-coffee-name').value,
    roast: document.querySelector('#new-coffee-roast').value
}
coffees.push(newCoffee)
storage.setItem('coffees', JSON.stringify(coffees))
```

- [See also the guide from MDN here][local-storage-guide]

[local-storage-guide]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
