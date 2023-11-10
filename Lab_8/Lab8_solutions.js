
    
console.log ('********* Question One ****************');

function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  
  function LinkedList() {
    this.head = null;
  
    this.add = function(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    };
  
    this.remove = function(value) {
      if (!this.head) {
        return;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let previous = null;
  
      while (current && current.value !== value) {
        previous = current;
        current = current.next;
      }
  
      if (current) {
        previous.next = current.next;
      }
    };
  
    this.print = function() {
      let current = this.head;
      let result = "LinkedList{";
      while (current) {
        result += current.value;
        if (current.next) {
          result += ",";
        }
        current = current.next;
      }
      result += "}";
      console.log(result);
    };
  }
  
  let linkedlist = new LinkedList();
  linkedlist.add(1);
  linkedlist.add(2);
  linkedlist.add(3);
  linkedlist.print(); // Expected Result: LinkedList{1,2,3}
  linkedlist.remove(2);
  linkedlist.print(); // Expected Result: LinkedList{1,3}



  
  console.log ('********* Question Two ****************')


  function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
  
    
    this.inputNewGrade = function(newGrade) {
      this.grades.push(newGrade);
    };
  
    this.computeAverage = function() {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    };
  }
  
  
  let student1 = new Student("John", "Doe");
  student1.inputNewGrade(85);
  student1.inputNewGrade(90);
  console.log(student1.computeAverage()); 
  
  let student2 = new Student("Jane", "Smith");
  student2.inputNewGrade(92);
  student2.inputNewGrade(88);
  console.log(student2.computeAverage()); 
  
  