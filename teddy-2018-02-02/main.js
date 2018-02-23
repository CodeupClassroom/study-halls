(function(){

/**
 * TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */

var books = [
    {
        title: "1984",
        author: {
            firstName: "George",
            lastName: "Orwell"
        }
    },
    {
        title: "The Lord of the Rings",
        author: {
            firstName: "J.R.R.",
            lastName: "Tolkien"
        }
    },
    {
        title: "R is for Rocket",
        author: {
            firstName: "Ray",
            lastName: "Bradbury"
        }
    },
    {
        title: "The Lost World",
        author: {
            firstName: "Michael",
            lastName: "Crichton"
        }
    },
    {
        title: "The Shining",
        author: {
            firstName: "Stephen",
            lastName: "King"
        }
    }
];

/**
 * In general if we want to loop over a collection (array) in JS, we have 2
 * options:
 * - for loop
 * - forEach loop
 */

// // Using a for loop, we rely on the fact that arrays are 0 indexed, and the
// // arrays length
// var numbers = [1, 2, 3, 4, 5];
// for(var i = 0; i < numbers.length; i += 1) {
//     var number = numbers[i];
//     console.log(number);
// }

    // i++ is the same as i += 1

    /**
     * When you have a problem that involves manipulating a collection, solve
     * the problem for a single item, then do that in a loop
     */

    // for (var i = 0; i < books.length; i += 1) {
    //     var book = books[i];
    //     var title = book.title;
    //     var authorName = book.author.firstName + ' ' + book.author.lastName;
    //     var bookNumber = i + 1;
    //     console.log('This is book #' + bookNumber);
    //     console.log('The title is: ' + title);
    //     console.log('This book was written by: ' + authorName + '.');
    //     console.log('---');
    // }


    // var cars = [
    //     {
    //         make: "Toyota",
    //         model: "Camry",
    //         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
    //         owner: {
    //             name: "Jane Doe",
    //             age: 30
    //         }
    //     },
    //     {
    //         make: "Honda",
    //         model: "Accord",
    //         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
    //         owner: {
    //             name: "John Doe",
    //             age: 31
    //         }
    //     }
    // ];

    // // Display the make and owner name of each car in the console
    // for(var i = 0; i < cars.length; i++) {
    //     var car = cars[i];
    //     var make = car.make;
    //     var owner = car.owner.name;
    //     console.log('The make is: ' + make);
    //     console.log('The owner is: ' + owner);
    // }






    // I want an array of student objects where each student has a name, an id
    // number, and a grade
    var students = [];

    // I need a function that returns an object.
    // The function accepts a name, id, and grade
    // The object returned has an id, name, and grade property.
    function makeStudent(name, id, grade) {
        return {
            name: name,
            id: id,
            grade: grade
        }
    }

    var student = makeStudent('Zach', 1, 100);
    console.log(student);






    var question = {
        module: 'JavaScript',
        difficulty: 'Easy',
        questionText: 'What is a real world example of objects?',
        answers: [
            {
                answerText: 'A Quiz Applicaiton',
                isCorrect: true
            },
            {
                answerText: 'Ther is no practical application',
                isCorrect: false
            }
        ]
    }


























    /**
     * When to use the this keyword? w.r.t. a forEach loop (`element`)
     */

})()
