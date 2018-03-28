# Study Hall

## When to use a for vs a while loop?

- `for`: when we want to iterate a known amount of times (arrays)
  (keywords: each, in, every)

- `while` loop: when we don't know how many times we want to loop (ex. seating
  shuffle) (keywords: until, when)

- `forEach` vs `for`: foreach may or may not be available in other languages;
  prefer a foreach loop when working with arrays, if you need to do something
  atypical, use a for loop

## Where to define variables?

requirement: Before you use them.

best practice: at the top of the scope in which their referenced

## When to use `return` vs `console.log`?

When you're inside of a function, `return`! Inside of a function, `console.log`s
are only for debugging

- `return`
    - inside of function
    - after performing some calculation
    - to get a value outside of a function
    - stop a functions evaluation
    - if you want to be able to compose your functions, or combine function
      results
- `console.log`
    - show something to the user

## What is the difference between a function and a method?

The `.`. If our code looks like `.something()` that's a method, if there's no
`.`, it's a function.

A method operates on the object it's called on, that is, whatever is on the
lefthand side of the `.`.

```js
"12345".subtring(2, 4) // "34"
```

```js
parseInt("123abc")
```
