class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static greet() {
      return "Hello there!";
    }
  
    canSleep() {
      return `${this.name} is sleeping.`;
    }
  }
  

  // question 2   employb class

  class Employee extends Person {
    #salary;
  
    constructor(name, age, salary) {
      super(name, age);
      this.salary = salary;
    }
  
    get salary() {
      return this.#salary;
    }
  
    set salary(value) {
      if (value > 0) {
        this.#salary = value;
      } else {
        console.log("Salary must be a positive number.");
      }
    }
  
    working() {
      return `${this.name} is working.`;
    }
  }

  // Qestion 3 Manager class

  class Manager extends Employee {
    static getRole() {
      return "Manager";
    }
  
    managing() {
      return `${this.name} is managing.`;
    }
  }

  // Question 4 Excutive class

  class Manager extends Employee {
    static getRole() {
      return "Manager";
    }
  
    managing() {
      return `${this.name} is managing.`;
    }
  }
  
  
