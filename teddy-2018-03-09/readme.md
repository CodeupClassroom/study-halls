# Study Hall

## Interfaces + Abstract Classes

- Interfaces are (basically) just abstract classes that only define public
  instance methods.
- Both _cannot_ be instantiated, that is, they are useful as types, but you
  can't create objects (directly) from them.
  
When to use abstract class vs. an interface?

- prefer an interface
- use an abstract class if you need specifically defined behavior

### Interfaces

- define behavior without exposing implementation (leaving us free to change the
  implementation)
- Can be thought of as a contract

**Instantiate**: to create an instance of a class

- abstract and interfaces *cannot* be instantiated
- classes can be instantiated

----

## Collections Exercise in Detail

> Create a map for students and Github usernames

> Create a class named GradesApplication with a main method.

> Inside the main method, create a HashMap named students.

> It should have keys that are strings that represent github usernames, and
> values that are Student objects. Create at least 4 student objects with at
> least 3 grades each, and add them to the map.

> Be creative! Make up github usernames and grades for your student objects

```java
// keys are of type String
// values are of type Student
HashMap<String, Student> students = new HashMap();

// In general
Hash<KeyType, ValueType>
```

## What is a feature?

- discrete bit of functionality

### Quiz Taking Application

**Feature List**

- Admin users create cohorts
- Admin users add students to cohorts
- Students sign in with their github
- Students are authorized to view the curriculum
- Students take quizzes

-----

"We have a tendancy to view ourselves as a work in progress, but everyone else
as a finished product" -- some random person on a reddit thread I read last
night

---

For the assessment next week:

- write and implement interfaces
- write and instantiate classes
- create and use classes that extend from superclasses
- Use the built-in java collections
