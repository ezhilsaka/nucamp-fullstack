class Student{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}

class Bootcamp{
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister){
        if(!(studentToRegister.name) || !(studentToRegister.email)){
            console.log("Invalid name or email");
            return false; 
        }
      
        for(let stu of this.students){
            if(stu.email === studentToRegister.email){
                console.log(`This email ${stu.email} is already registered`);
                return false;
            }
        }
        this.students.push(studentToRegister);
        console.log(`Registering ${studentToRegister.name} to the ${this.name} bootcamp`);
        return true; 
    }

    listStudents(){
        if(this.students.length === 0){
            console.log(`No students are registered to the ${this.name} bootcamp.`);
            return false; 
        }
        console.log(`The students registered in ${this.name} are:`);
        for(let s of this.students){
            console.log(`Name: ${s.name} Email: ${s.email}`);
        }
        return true;
    }

    getinfo(){
        console.log(`This bootcamp's name is ${this.name} and the level is ${this.level}.`); 
    }
    
    removeStudent(removeEmail){
        let studentsEmail = [];
        for(let stu of this.students){
            studentsEmail.push(stu.email);
        }
        if(studentsEmail.includes(removeEmail)){
            let studentIndexToRemove = studentsEmail.indexOf(removeEmail);
            let removedStudentArray = this.students.splice(studentIndexToRemove,1);
            let removedStudent = removedStudentArray[0]; 
            console.log(`Student ${removedStudent.name} with email ${removedStudent.email} has been removed from ${this.name} bootcamp.`);  

        }
        else{
            console.log(`Student with this email ${removeEmail} is not registered for ${this.name} bootcamp`);
        }
    }
}

testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    //commented the below code to test the remove student function. The Test 4 second part won't show as passed with the below linke commented.
    //bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
};

runTest(reactBootcamp, testStudent);
reactBootcamp.getinfo();
reactBootcamp.removeStudent("bugs@bunny.com");