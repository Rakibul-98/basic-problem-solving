// problem 1: Array filtering and mapping
const persons = [
  { name: "Rakib", age: 25, gender: "Male" },
  { name: "Sumaiya", age: 19, gender: "Female" },
  { name: "Tanvir", age: 34, gender: "Male" },
  { name: "Nusrat", age: 28, gender: "Female" },
  { name: "Fahim", age: 17, gender: "Male" },
  { name: "Mahi", age: 23, gender: "Female" },
  { name: "Hasan", age: 45, gender: "Male" },
  { name: "Ruma", age: 31, gender: "Female" },
  { name: "Shakil", age: 39, gender: "Male" },
  { name: "Ritu", age: 21, gender: "Female" },
  { name: "Jamal", age: 60, gender: "Male" },
  { name: "Mim", age: 15, gender: "Female" },
  { name: "Bappi", age: 27, gender: "Male" },
  { name: "Sharmin", age: 40, gender: "Female" },
  { name: "Rasel", age: 33, gender: "Male" },
];

const getFilteredPerson = (persons) => {
  const removeFemale = persons.filter((person) => person.gender !== "Female");
  const existing = removeFemale.map((person) => person.name);
  return existing;
};

console.log("Filtered Persons:", getFilteredPerson(persons));

// problem 2: Object manipulation
const books = [
  { title: "A Golden Age", author: "Tahmima Anam", year: 2007 },
  { title: "The Kite Runner", author: "Khaled Hosseini", year: 2003 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Namesake", author: "Jhumpa Lahiri", year: 2003 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    title: "Half of a Yellow Sun",
    author: "Chimamanda Ngozi Adichie",
    year: 2006,
  },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Midnight’s Children", author: "Salman Rushdie", year: 1981 },
  { title: "The Book Thief", author: "Markus Zusak", year: 2005 },
  { title: "Norwegian Wood", author: "Haruki Murakami", year: 1987 },
  { title: "Beloved", author: "Toni Morrison", year: 1987 },
  { title: "Home Fire", author: "Kamila Shamsie", year: 2017 },
];

const getBookNames = (books) => {
  return books.map((book) => book.title);
};

console.log("Book Names:", getBookNames(books));

// problem 3: Function composition
const getSquare = (n) => {
  return n * n;
};

const getDouble = (n) => {
  return n * 2;
};

const addNum = (n) => {
  return n + 5;
};

const getResult = (n) => {
  return addNum(getDouble(getSquare(n)));
};

console.log("Number: ",getResult(10));

// problem 4: Sorting Objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2016 },
  { make: "BMW", model: "X5", year: 2022 },
  { make: "Tesla", model: "Model 3", year: 2021 },
  { make: "Hyundai", model: "Elantra", year: 2019 },
  { make: "Nissan", model: "Altima", year: 2017 },
  { make: "Chevrolet", model: "Malibu", year: 2015 },
  { make: "Kia", model: "Sportage", year: 2020 },
  { make: "Audi", model: "A4", year: 2023 },
  { make: "Mercedes-Benz", model: "C-Class", year: 2022 },
  { make: "Volkswagen", model: "Passat", year: 2019 },
  { make: "Mazda", model: "CX-5", year: 2018 },
  { make: "Subaru", model: "Impreza", year: 2021 },
  { make: "Jeep", model: "Wrangler", year: 2020 },
];

const sortArray = (cars) => {
  const sorted = cars.sort((a, b) => a.year - b.year);
  return sorted;
};

console.log("Sorted cars: ",sortArray(cars));

// problem 5: Array Reduction
const numbers = [4, 12, 7, 23, 18, 5, 31, 9, 14, 2, 27, 19, 8, 11, 21];

const getSum = (nums) => {
  return nums.reduce((acc, current) => acc + current, 0);
};

console.log("Sum of numbers: ",getSum(numbers));

// problem 6: Leap Year Checker
const checkLeapYear = (year) => {
  if ((year % 4 === 0 || year % 100 !== 0) && year % 400 === 0) {
    return `${year} is leap Year!`;
  }
  return `${year} is not leap Year!`;
};

console.log(checkLeapYear(1900));

// problem 7: Unique Values
const numbers2 = [1, 5, 3, 5, 7, 1, 9, 3, 2, 10, 7, 4];

const getUniqueNums = (nums) => {
  const newArray = [];
  nums.forEach((num) => {
    if (!newArray.includes(num)) {
      newArray.push(num);
    }
  });
  return newArray;
};

console.log("Unique numbers:", getUniqueNums(numbers2));

// problem 8: Find Maximum Value
const numbers3 = [1, 5, 3, 5, 7, 1, 9, 3, 2, 10, 7, 4];
const getMax = (nums) => {
  let max = 0;
  if (nums.length !== 0) {
    nums.forEach((num) => {
      if (num > max) max = num;
    });
  }
  return max;
};

console.log("Max value: ", getMax(numbers3));

// problem 9: Advanced Sorting
const students = [
  { name: "Ayesha", grades: [85, 90, 78] },
  { name: "Rafi", grades: [88, 95, 91] },
  { name: "Tania", grades: [70, 60, 65] },
  { name: "Hasib", grades: [92, 89, 84] },
  { name: "Mehjabin", grades: [75, 80, 70] },
];

const getAverage = (grades) => {
  return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
};

const getSortedByAvgGrade = (array) => {
  for (let i = 0; i < array.length; i++) {
    let max = i;
    for (let j = i + 1; j < array.length; j++) {
      if (getAverage(array[j].grades) > getAverage(array[max].grades)) {
        max = j;
      }
    }
    if (max !== i) {
      [array[i], array[max]] = [array[max], array[i]];
    }
  }
  return array;
};

console.log("Sorted Students:", getSortedByAvgGrade(students));
