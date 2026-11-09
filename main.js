console.log("===== JAVASCRIPT FUNDAMENTALS =====");

// ==========================================
// VARIABLES AND DATA TYPES
// ==========================================

// Personal information
let name = "Grace Wambui";
let age = 22;
const birthYear = 2004;
let isStudent = true;

const favoriteColors = ["Purple", "Blue", "Black"];
const today = new Date();

// Display personal information
console.log("\n--- PERSONAL INFORMATION ---");

console.log("Name:", name);
console.log("Age:", age);
console.log("Birth year:", birthYear);
console.log("Is a student:", isStudent);
console.log("Favorite colors:", favoriteColors);
console.log("Today's date:", today);

// typeof operator
console.log("\n--- DATA TYPES ---");

console.log("Name type:", typeof name);
console.log("Age type:", typeof age);
console.log("Student status type:", typeof isStudent);
console.log("Birth year type:", typeof birthYear);
console.log("Colors type:", typeof favoriteColors);

// let versus const
console.log("\n--- LET AND CONST ---");

let score = 100;

console.log("Original score:", score);

score = 150;

console.log("Updated score:", score);

const PI = 3.14159;

console.log("Value of PI:", PI);

// ==========================================
// NUMBER OPERATIONS
// ==========================================

console.log("\n--- NUMBER OPERATIONS ---");

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Increment and decrement
console.log("\n--- INCREMENT AND DECREMENT ---");

let count = 0;

console.log("Initial count:", count);

count++;

console.log("After increment:", count);

count--;

console.log("After decrement:", count);

// ==========================================
// STRING OPERATIONS
// ==========================================

console.log("\n--- STRING OPERATIONS ---");

let firstName = "Grace";
let lastName = "Wambui";

// Concatenation
let fullName = firstName + " " + lastName;

console.log("Full name:", fullName);

// Template literals
let greeting = `Hello, ${firstName}!`;

let message = `${firstName} has ${firstName.length} letters.`;

console.log(greeting);
console.log(message);

// String methods
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First initial:", firstName.charAt(0));
console.log("Contains Grace:", fullName.includes("Grace"));

// ==========================================
// COMPARISON OPERATORS
// ==========================================

console.log("\n--- COMPARISON OPERATORS ---");

console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 === 5:", 5 === 5);
console.log('5 == "5":', 5 == "5");
console.log("5 !== 3:", 5 !== 3);

// ==========================================
// LOGICAL OPERATORS
// ==========================================

console.log("\n--- LOGICAL OPERATORS ---");

console.log("AND:", true && true);
console.log("OR:", true || false);
console.log("NOT:", !true);

// ==========================================
// AGE CALCULATIONS
// ==========================================

console.log("\n--- AGE CALCULATIONS ---");

// Approximate calculations
const ageInDays = Math.round(age * 365.25);

const ageInHours = ageInDays * 24;

const yearTurning100 = birthYear + 100;

console.log("Approximate age in days:", ageInDays);

console.log("Approximate age in hours:", ageInHours);

console.log("Year Grace turns 100:", yearTurning100);

// ==========================================
// FUNCTIONS
// ==========================================

console.log("\n===== FUNCTIONS =====");

// Function with default parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet("Grace"));
console.log(greet());

// Function expression
const add = function (a, b) {
    return a + b;
};
console.log("Addition:", add(10, 5));

// Arrow function
const multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(4, 5));

// Arrow function with a body and division-by-zero handling
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};
console.log("Division:", divide(20, 4));
console.log("Division test:", divide(20, 0));

// Required practice functions
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(part => part.charAt(0).toUpperCase())
        .join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Area:", calculateArea(8, 5));
console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25));
console.log("Is 14 even?", isEven(14));
console.log("Initials:", getInitials("Grace Wambui"));
console.log("Reversed name:", reverseString("Grace"));

// Default tip percentage is 15%
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

console.log("Tip at 15%:", calculateTip(2000));
console.log("Tip at 20%:", calculateTip(2000, 20));


// ==========================================
// CONDITIONAL STATEMENTS
// ==========================================

console.log("\n===== CONDITIONAL STATEMENTS =====");

// IF / ELSE: Grade calculator
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("Grace's grade:", getGrade(86));
console.log("Grade for 95:", getGrade(95));
console.log("Grade for 55:", getGrade(55));

// SWITCH: Day name
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}

console.log("Day 3:", getDayName(3));
console.log("Day 7:", getDayName(7));
console.log("Day 9:", getDayName(9));


// ==========================================
// LOOPS
// ==========================================

console.log("\n===== LOOP EXERCISES =====");

// FOR LOOP: Print numbers 1 to 100
console.log("--- Numbers 1 to 100 ---");
for (let number = 1; number <= 100; number++) {
    console.log(number);
}

// FOR LOOP: Print even numbers 1 to 50
console.log("--- Even numbers 1 to 50 ---");
for (let number = 1; number <= 50; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

// WHILE LOOP: Count from 1 to 5
console.log("--- While loop ---");
let counter = 1;

while (counter <= 5) {
    console.log(counter);
    counter++;
}

// FOR...OF LOOP: Loop through an array
console.log("--- Favorite colors ---");
const colorsForLoop = ["Purple", "Blue", "Black"];

for (const color of colorsForLoop) {
    console.log(color);
}

// FIZZBUZZ
console.log("--- FizzBuzz ---");

for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}

// TRIANGLE OF STARS
console.log("--- Star triangle ---");

for (let row = 1; row <= 5; row++) {
    let stars = "";

    for (let column = 1; column <= row; column++) {
        stars += "*";
    }

    console.log(stars);
}

// ==========================================
// CALCULATOR MINI-PROJECT
// ==========================================

console.log("\n===== CALCULATOR MINI-PROJECT =====");

function calculatorAdd(a, b) {
    return a + b;
}

function calculatorSubtract(a, b) {
    return a - b;
}

function calculatorMultiply(a, b) {
    return a * b;
}

function calculatorDivide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return calculatorAdd(num1, num2);
        case "-":
            return calculatorSubtract(num1, num2);
        case "*":
            return calculatorMultiply(num1, num2);
        case "/":
            return calculatorDivide(num1, num2);
        case "%":
            if (num2 === 0) {
                return "Cannot calculate modulus with zero";
            }
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 - 5 =", calculate(10, "-", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 5 =", calculate(10, "/", 5));
console.log("10 % 3 =", calculate(10, "%", 3));
console.log("2 ** 3 =", calculate(2, "**", 3));
console.log("Division by zero:", calculate(10, "/", 0));
console.log("Invalid operator:", calculate(10, "&", 5));


// ==========================================
// FIZZBUZZ
// ==========================================

console.log("\n===== FIZZBUZZ =====");

function fizzBuzz(limit) {
    for (let number = 1; number <= limit; number++) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log("FizzBuzz");
        } else if (number % 3 === 0) {
            console.log("Fizz");
        } else if (number % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(number);
        }
    }
}

fizzBuzz(30);


// ==========================================
//  REVERSE A STRING
// ==========================================

console.log("\n===== REVERSE STRING =====");

// Using a loop
function reverseWithLoop(text) {
    let reversed = "";

    for (let index = text.length - 1; index >= 0; index--) {
        reversed += text[index];
    }

    return reversed;
}

// Using built-in methods
function reverseWithMethods(text) {
    return text.split("").reverse().join("");
}

console.log("Loop method:", reverseWithLoop("Grace Wambui"));
console.log("Built-in method:", reverseWithMethods("JavaScript"));


// ==========================================
// DAILY CHALLENGE 3: LARGEST NUMBER
// ==========================================

console.log("\n===== LARGEST NUMBER =====");

const challengeNumbers = [12, 45, 7, 89, 23, 56];

//  Using a loop
function findLargestWithLoop(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let largest = numbers[0];

    for (const number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

// Using reduce()
function findLargestWithReduce(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    return numbers.reduce((largest, current) => {
        return current > largest ? current : largest;
    });
}

console.log("Numbers:", challengeNumbers);
console.log("Largest using loop:", findLargestWithLoop(challengeNumbers));
console.log("Largest using reduce:", findLargestWithReduce(challengeNumbers));

// ==========================================
// ARRAYS
// ==========================================

console.log("\n===== ARRAYS =====");

// Creating arrays
const studentNames = ["Grace", "Akinyi", "Wanjiku", "Njeri"];
const testNumbers = [5, 12, -3, 20, 8, -7, 15];

console.log("Student names:", studentNames);
console.log("First student:", studentNames[0]);
console.log("Number of students:", studentNames.length);

// Adding and removing array elements
const favoriteSubjects = ["Mathematics", "English"];

favoriteSubjects.push("Computer Science");
console.log("After push:", favoriteSubjects);

favoriteSubjects.unshift("Physics");
console.log("After unshift:", favoriteSubjects);

favoriteSubjects.pop();
console.log("After pop:", favoriteSubjects);

favoriteSubjects.shift();
console.log("After shift:", favoriteSubjects);

// forEach()
console.log("--- forEach() ---");

studentNames.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
});

// map(): Double every number
const originalNumbers = [2, 4, 6, 8, 10];

const doubledNumbers = originalNumbers.map(number => number * 2);

console.log("Original numbers:", originalNumbers);
console.log("Doubled numbers:", doubledNumbers);

// filter(): Remove negative numbers
const positiveNumbers = testNumbers.filter(number => number >= 0);

console.log("Numbers without negatives:", positiveNumbers);

// find(): Find the first number greater than 10
const firstNumberAboveTen = testNumbers.find(number => number > 10);

console.log("First number above 10:", firstNumberAboveTen);

// reduce(): Calculate the product of all numbers
const productOfNumbers = originalNumbers.reduce(
    (product, number) => product * number,
    1
);

console.log("Product of numbers:", productOfNumbers);

// includes(): Check whether an array contains a value
console.log("Contains Grace:", studentNames.includes("Grace"));
console.log("Contains Kevin:", studentNames.includes("Kevin"));


// ==========================================
// OBJECTS
// ==========================================

console.log("\n===== OBJECTS =====");

// Creating an object with different property types
const studentProfile = {
    name: "Grace Wambui",
    age: 22,
    isStudent: true,
    subjects: ["Mathematics", "English", "Computer Science"],
    address: {
        town: "Nairobi",
        country: "Kenya"
    }
};

console.log("Student profile:", studentProfile);

// Accessing properties
console.log("Name using dot notation:", studentProfile.name);
console.log("Age using bracket notation:", studentProfile["age"]);
console.log("Town:", studentProfile.address.town);

// Modifying properties
studentProfile.age = 23;
console.log("Updated age:", studentProfile.age);

// Adding a property
studentProfile.phone = "0712345678";
console.log("Added phone:", studentProfile.phone);

// Deleting a property
delete studentProfile.isStudent;
console.log("After deleting student status:", studentProfile);

// Object methods
const calculatorObject = {
    // Method using a function expression
    add: function (a, b) {
        return a + b;
    },

    // Method shorthand
    subtract(a, b) {
        return a - b;
    },

    // Method using an arrow function
    multiply: (a, b) => a * b
};

console.log("Object addition:", calculatorObject.add(10, 5));
console.log("Object subtraction:", calculatorObject.subtract(10, 5));
console.log("Object multiplication:", calculatorObject.multiply(10, 5));

// Object.keys()
console.log("Object keys:", Object.keys(studentProfile));

// Object.values()
console.log("Object values:", Object.values(studentProfile));

// Object.entries()
console.log("Object entries:", Object.entries(studentProfile));

// Looping through object entries
console.log("--- Student profile details ---");

for (const [key, value] of Object.entries(studentProfile)) {
    console.log(`${key}:`, value);
}
// ==========================================
//  ARRAYS OF OBJECTS
// ==========================================

console.log("\n===== ARRAYS OF OBJECTS =====");

const gradeStudents = [
    { name: "Grace Wambui", age: 22, grade: 86, major: "Computer Science" },
    { name: "Akinyi Otieno", age: 21, grade: 92, major: "Information Technology" },
    { name: "Brian Kamau", age: 23, grade: 67, major: "Computer Science" },
    { name: "Wanjiku Njeri", age: 20, grade: 78, major: "Business Management" },
    { name: "Kevin Mwangi", age: 22, grade: 95, major: "Computer Science" },
    { name: "Faith Chebet", age: 21, grade: 59, major: "Information Technology" }
];

console.log("All students:", gradeStudents);

// 1. Map all student names
const allStudentNames = gradeStudents.map(student => student.name);
console.log("Student names:", allStudentNames);

// 2. Filter students with grades above 80
const highPerformers = gradeStudents.filter(student => student.grade > 80);
console.log("Students scoring above 80:", highPerformers);

// 3. Find a student by name
const selectedStudent = gradeStudents.find(
    student => student.name === "Akinyi Otieno"
);
console.log("Found student:", selectedStudent);

// 4. Calculate the average grade using reduce()
const classAverage = gradeStudents.reduce(
    (total, student) => total + student.grade,
    0
) / gradeStudents.length;

console.log("Class average:", classAverage);

// 5. Filter Computer Science students
const computerScienceStudents = gradeStudents.filter(
    student => student.major === "Computer Science"
);
console.log("Computer Science students:", computerScienceStudents);

// 6. Sort students by grade in descending order
const studentsByGrade = [...gradeStudents].sort(
    (a, b) => b.grade - a.grade
);
console.log("Students sorted by grade:", studentsByGrade);

// 7. Check whether some students scored above 90
const hasGradeAbove90 = gradeStudents.some(
    student => student.grade > 90
);
console.log("Does someone score above 90?", hasGradeAbove90);

// 8. Check whether every student scored at least 60
const everyonePassed = gradeStudents.every(
    student => student.grade >= 60
);
console.log("Did everyone score at least 60?", everyonePassed);


// ==========================================
// JSON
// ==========================================

console.log("\n===== JSON =====");

const postsJson = `[
    {
        "title": "JavaScript Fundamentals",
        "likes": 30,
        "published": true
    },
    {
        "title": "Understanding Arrays",
        "likes": 45,
        "published": false
    },
    {
        "title": "Working with Objects",
        "likes": 60,
        "published": true
    },
    {
        "title": "Introduction to Functions",
        "likes": 25,
        "published": true
    }
]`;

// Parse JSON text into a JavaScript array
const posts = JSON.parse(postsJson);
console.log("Parsed posts:", posts);

// Filter published posts
const publishedPosts = posts.filter(post => post.published);
console.log("Published posts:", publishedPosts);

// Sort published posts by likes, highest first
const popularPosts = [...publishedPosts].sort(
    (a, b) => b.likes - a.likes
);
console.log("Published posts sorted by likes:", popularPosts);

// Map posts into formatted strings
const postSummaries = popularPosts.map(
    post => `${post.title} (${post.likes} likes)`
);
console.log("Post summaries:", postSummaries);

// Convert the filtered array back into JSON text
const publishedPostsJson = JSON.stringify(publishedPosts, null, 2);
console.log("Published posts as JSON:", publishedPostsJson);

// Handle invalid JSON safely
try {
    const invalidJson = JSON.parse("{invalid data}");
    console.log(invalidJson);
} catch (error) {
    console.log("Invalid JSON detected:", error.message);
}


// ==========================================
// STUDENT GRADE TRACKER MINI-PROJECT
// ==========================================

console.log("\n===== STUDENT GRADE TRACKER =====");

const gradeTracker = {
    students: [],

    // Add a student and their subject grades
    addStudent(name, grades) {
        const existingStudent = this.getStudent(name);

        if (existingStudent) {
            return "Student already exists";
        }

        this.students.push({
            name: name,
            grades: grades
        });

        return `${name} added successfully`;
    },

    // Find a student by name
    getStudent(name) {
        return this.students.find(
            student => student.name.toLowerCase() === name.toLowerCase()
        ) || null;
    },

    // Calculate one student's average grade
    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) {
            return null;
        }

        const grades = Object.values(student.grades);

        if (grades.length === 0) {
            return null;
        }

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return total / grades.length;
    },

    // Calculate the average for a particular subject
    getSubjectAverage(subject) {
        const subjectGrades = this.students
            .filter(student => student.grades[subject] !== undefined)
            .map(student => student.grades[subject]);

        if (subjectGrades.length === 0) {
            return null;
        }

        const total = subjectGrades.reduce(
            (sum, grade) => sum + grade,
            0
        );

        return total / subjectGrades.length;
    },

    // Find the student with the highest average
    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }

        return this.students.reduce((topStudent, currentStudent) => {
            return this.getStudentAverage(currentStudent.name) >
                this.getStudentAverage(topStudent.name)
                ? currentStudent
                : topStudent;
        });
    },

    // Find students whose averages are below 70
    getStrugglingStudents() {
        return this.students.filter(student => {
            const average = this.getStudentAverage(student.name);
            return average !== null && average < 70;
        });
    },

    // Convert a numerical score into a letter grade
    getLetterGrade(score) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    },

    // Generate a formatted report card
    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found";
        }

        const average = this.getStudentAverage(name);

        if (average === null) {
            return "No grades available for this student";
        }

        let report = `REPORT CARD: ${student.name}\n`;
        report += "-----------------------------\n";

        for (const [subject, score] of Object.entries(student.grades)) {
            report += `${subject}: ${score} (${this.getLetterGrade(score)})\n`;
        }

        report += "-----------------------------\n";
        report += `Average: ${average.toFixed(2)}\n`;
        report += `Overall grade: ${this.getLetterGrade(average)}`;

        return report;
    }
};


// Add fictional student records
console.log(gradeTracker.addStudent("Grace Wambui", {
    Mathematics: 86,
    English: 91,
    ComputerScience: 88
}));

console.log(gradeTracker.addStudent("Akinyi Otieno", {
    Mathematics: 94,
    English: 89,
    ComputerScience: 96
}));

console.log(gradeTracker.addStudent("Brian Kamau", {
    Mathematics: 58,
    English: 65,
    ComputerScience: 62
}));

console.log(gradeTracker.addStudent("Wanjiku Njeri", {
    Mathematics: 72,
    English: 78,
    ComputerScience: 75
}));

// Test all required tracker methods
console.log("--- Grade tracker results ---");

console.log("Find Grace:", gradeTracker.getStudent("Grace Wambui"));

console.log(
    "Grace's average:",
    gradeTracker.getStudentAverage("Grace Wambui")
);

console.log(
    "Mathematics average:",
    gradeTracker.getSubjectAverage("Mathematics")
);

console.log("Top student:", gradeTracker.getTopStudent());

console.log(
    "Students below 70:",
    gradeTracker.getStrugglingStudents()
);

console.log("Grade for 95:", gradeTracker.getLetterGrade(95));
console.log("Grade for 84:", gradeTracker.getLetterGrade(84));

console.log(
    gradeTracker.generateReportCard("Grace Wambui")
);
// ==========================================
// DAILY CHALLENGE 4: REMOVE DUPLICATES
// ==========================================

console.log("\n===== REMOVE DUPLICATES =====");

const repeatedNumbers = [4, 7, 4, 9, 2, 7, 5, 9, 1];

console.log("Original array:", repeatedNumbers);

// Using Set
function removeDuplicatesWithSet(numbers) {
    return [...new Set(numbers)];
}

// Using filter()
function removeDuplicatesWithFilter(numbers) {
    return numbers.filter(
        (number, index) => numbers.indexOf(number) === index
    );
}

console.log(
    "Using Set:",
    removeDuplicatesWithSet(repeatedNumbers)
);

console.log(
    "Using filter:",
    removeDuplicatesWithFilter(repeatedNumbers)
);


// ==========================================
// DAILY CHALLENGE 5: PALINDROME CHECKER
// ==========================================

console.log("\n===== PALINDROME CHECKER =====");

function isPalindrome(text) {
    // Ignore spaces and differences in letter case
    const cleanedText = text.toLowerCase().replace(/\s/g, "");

    const reversedText = cleanedText
        .split("")
        .reverse()
        .join("");

    return cleanedText === reversedText;
}

console.log("Is 'Madam' a palindrome?", isPalindrome("Madam"));
console.log(
    "Is 'Never odd or even' a palindrome?",
    isPalindrome("Never odd or even")
);
console.log("Is 'JavaScript' a palindrome?", isPalindrome("JavaScript"));
