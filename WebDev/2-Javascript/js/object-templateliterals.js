// 1 - white rabbit
const rabbit = { 
    color: "white",
    checkWatch() {
      console.log(`A ${this.color} rabbit checks his watch and exclaims, 'I\'m late!'`);
    }
  };
  rabbit.checkWatch();
  
  // 2 - spaceship
  const spaceship = { 
    name: "SpaceFirst",
    launch(){
      console.log(`You have launched the spaceship ${this.name} !`);
    }
  };
  spaceship.launch(); 
  
  // 3 - shopping cart
  const cart = {
    contents: [],
    addItem(item){
      this.contents.push(item);
    }
  };
  cart.addItem("laptop");
  cart.addItem("phone");
  cart.addItem("tablet");
  console.log("The cart contains:", cart.contents);
  
  const lever = {
    stamp: "ACME",
    pull(){
      console.log(`An anvil stamped ${this.stamp} drops on your head`)
    }
  }
  // your code here - uncomment the line below when done
  lever.pull();
  
  const classroom = {
    studentName: [],
    addStudent(student){
      this.studentName.push(student);
    },
    removeStudent(student){
      removeStudentIndex = this.studentName.indexOf(student);
      if(removeStudentIndex >= 0){
        removedStudent = this.studentName.splice(removeStudentIndex, 1);
        console.log(`${removedStudent} has been removed`);
      } 
      else{
        console.log(`${student} is not part of the classroom`); 
      }
    }
  };
  
  classroom.addStudent("John");
  classroom.addStudent("Mike");
  console.log("The students in a class room are", classroom.studentName);
  classroom.removeStudent("John"); 
  classroom.removeStudent("Nancy");
  console.log("The students in a class room are", classroom.studentName); 