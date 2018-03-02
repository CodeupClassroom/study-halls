# Study Hall Notes

## Recursion

- **def**: A method (function) that calls itself ; an alternative to iteration
  with a loop

**When to use recursion?**

Certain classes of algorithmic problems are most easily solved with recursion
(tree traversal, parsing) (base case + more). For the most part, as far as this
course goes, what we do will be better served by iteration. Recursion could very
well come up as an interview question. In some other (mostly less popular)
programming languages, recursion is the primary way to solve problems.

- [Curriculum Example](http://java.codeup.com/slides/methods#7)

## Difference between `printf` and `String.format`

`String.format` returns a string (but does *not* produce any output), while
`System.out.printf` prints something to the console (but does *not* return
anything)

## Format Strings

- Mostly used for nice console output (tables)
- [Cheatsheet](http://web.cerritos.edu/jwilson/SitePages/java_language_resources/Java_printf_method_quick_reference.pdf)
    - [Alternate](https://alvinalexander.com/programming/printf-format-cheat-sheet)
- **Don't memorize this!**
- def: a string that contains specially formatted placeholders that will be
  replaced with passed values
- not used terribly much anymore, but almost every language has them (except javascript)

```java
System.out.printf(
    "First placeholder: \"%s\" second: \"%s\" third: \"%s\"",
    "The will be used in place of the first %s.",
    "Numbers will be turned into strings too!",
    2018
);
```

## Numeric Data Types in Java

- Integer: `byte`, `short`, `int`, `long` -> "counting numbers" (no decimals)
  (xs, sm, md, lg)
- decimal numbers: `float`, `double`
- characters: a single character `char`, multiple characters `String`
- boolean

For right now: when you need a numeric data type, just use `int` or `double`.

## Casting

- Implicit: more precision, we don't have to go to any extra trouble, the case
  *implicitly* happens
    - e.g. int -> double
- Explicit: usually means we could be losing something, we must be *explicit* in
  order to make the cast happen
    - e.g. double -> int

> It's easier to make variables more precise in Java than it is to "widen" their data type scope.

> It's easier to make *the data type* of variables more precise in Java than it is to "widen" their data type scope.

## Method Overloading Example

```java
public static void inspect(int i) {
    System.out.println("This is an integer. It's value is: " + i);
}

public static void inspect(double d) {
    System.out.println("This is a double. It's value is: " + d);
}

public static void inspect(String s) {
    System.out.println("This a string, it contains: \"" + s + "\"");
}

public static void main(String[] args) {
    inspect(123);
    inspect(3.14);
    inspect("Good news everyone!");
}
```

- Most common use case: default function argument values

```java
/**
 * A method that will retrieve a weather forecast for a given day.
 *
 * By default (when called with no arguments), will return today's weather
 */
public static WeatherForecast getWeather(Date day) {
    return queryWeatherApi(day);
}
public static WeatherForecast getWeather() {
    Date today = new Date();
    return getWeather(today);
}
```

## IntelliJ Class File Types

- new -> Java Class
