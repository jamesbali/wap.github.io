
// Question One
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
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
    }
  
    remove(value) {
      if (!this.head) {
        return;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let prev = null;
  
      while (current && current.value !== value) {
        prev = current;
        current = current.next;
      }
  
      if (!current) {
        return;
      }
  
      prev.next = current.next;
    }
  
    print() {
      let current = this.head;
      let output = 'LinkedList{';
  
      while (current) {
        output += current.value;
        if (current.next) {
          output += ',';
        }
        current = current.next;
      }
  
      output += '}';
      console.log(output);
    }
  }
  
  const linkedList = new LinkedList();
  
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3); //in the console, you should see: LinkedList{1,2,3}
  linkedList.print(); 
  linkedList.remove(3);
  linkedList.print(); 
  

//Question Two
  
  class Student {
    constructor(studentId) {
      this.studentId = studentId;
      this.answers = [];
    }
  
    addAnswer(questionId, answer) {
      this.answers.push({ qid: questionId, answer: answer });
    }
  }

  class Question {
    constructor(qid, answer) {
      this.qid = qid;
      this.answer = answer;
    }
  
    checkAnswer(studentAnswer) {
      return this.answer === studentAnswer;
    }
  }
  
  class Quiz {
    constructor() {
      this.questions = new Map();
      this.students = [];
    }
  
    addQuestion(question) {
      this.questions.set(question.qid, question.answer);
    }
  
    addStudent(student) {
      this.students.push(student);
    }
  
    scoreStudent(studentId) {
      const student = this.students.find(s => s.studentId === studentId);
      if (!student) {
        console.log(`Student with ID ${studentId} not found.`);
        return 0;
      }
  
      let score = 0;
      student.answers.forEach(answer => {
        const correctAnswer = this.questions.get(answer.qid);
        if (correctAnswer && correctAnswer === answer.answer) {
          score++;
        }
      });
  
      return score;
    }
  
    getAverageScore() {
      if (this.students.length === 0) {
        console.log("No students in the quiz.");
        return 0;
      }
  
      const totalScore = this.students.reduce((sum, student) => {
        return sum + this.scoreStudent(student.studentId);
      }, 0);
  
      return totalScore / this.students.length;
    }
  }
  
  