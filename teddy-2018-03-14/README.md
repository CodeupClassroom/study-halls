# Study Hall

## For the Assessment:

- Object Oriented Programming
  - Getters and Setters
  - Static vs Instance
- Inheritance and Polymorphism
  - Extend classes
- Interfaces and Abstract Classes
  - Creating + Implementing Interfaces
- Collections
- Exceptions and Error Handling
  - Throw exceptions

## Vocab

```java
hashMap.add(something)
```

- `.add`, `.remove` -- methods
- `something` -- argument
- `person.name` -- `.name` is a property (there's not `()`)

## Static vs Instance

- static means that it belongs to the class as a whole
- instance means it belongs to individual objects
- static methods + properties are defined with the `static` keyword

```java
private static String filename; // static property

private int age; // no "static" keyword, meaning this is an instance property
```

- Same pattern holds true for methods

```
// write a static method that uppercases a passed string
public static String uppercaseString(String s){
   // ...
}
```

- instance methods + properties

```java
class Movie {
  private String name;
  private String directory;
  private String yearReleased;
  // all of the above are instance properties

  // instance method
  public String getName() {
    return this.name;
  }
}
```

## Exceptions + Error Handling

- **Exception**: java's way to do error handling
- Exceptions are either *checked* or *unchecked*
  - unchecked exceptions are `ArrayIndexOutOfBounds`
- checked exceptions must be declared and handled
  - if the exception can be thrown inside of a method, the method must
    either use a try-catch or a `throws` clause

**Custom Exception**

- You can create a class that extends `Exception` to create
  error-handling that is specific to your application.
