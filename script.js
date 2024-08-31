// Person class
class Person {
  /**
   * Constructor method
   * @param {string} name - The name of the person
   * @param {number} age - The age of the person
   */
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  /**
   * Getter method for name
   * @returns {string} The name of the person
   */
  get name() {
    return this._name;
  }

  /**
   * Setter method for age
   * @param {number} age - The new age of the person
   */
  set age(age) {
    this._age = age;
  }
}

// Student class
class Student extends Person {
  /**
   * Constructor method
   * @param {string} name - The name of the student
   * @param {number} age - The age of the student
   */
  constructor(name, age) {
    super(name, age);
  }

  /**
   * Method to log that the student is studying
   */
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class
class Teacher extends Person {
  /**
   * Constructor method
   * @param {string} name - The name of the teacher
   * @param {number} age - The age of the teacher
   */
  constructor(name, age) {
    super(name, age);
  }

  /**
   * Method to log that the teacher is teaching
   */
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching