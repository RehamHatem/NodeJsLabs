const { error } = require("console");
const fs = require("fs");

//Implement both synchronous and asynchronous file operations
fs.readFile("students.json","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    if(data){
        console.log(`studentFile with async : ${data}`);
    }
});

const studentFile=fs.readFileSync("students.json","utf-8");
console.log(`studentFile with sync : ${studentFile}`);

//=================================================================================================================

//Create functions to:
   // Write the studentData to students.json
   function writeStudentSync(data){
    fs.writeFileSync("students.json",JSON.stringify(data),"utf-8");
    console.log(`data write successfully with Sync`);
   }
   function writeStudentAsync(data) {
  fs.writeFile("students.json", JSON.stringify(data, null, 2), "utf-8", (error) => {
    if (error) {
      console.log(`Data write error with Async:`, error);
    } else {
      console.log(`Data written successfully with Async`);
    }
  });
}
   const dataSync= {
    id: 4,
    name: "reham hatem",
    age: 22,
    course: "Web Development",
    grades: {
      html: 100,
      javascript: 100,
    },
  };
  const dataAsync= {
    id: 5,
    name: "roro",
    age: 23,
    course: "Web Development",
    grades: {
      html: 1000,
      javascript: 1000,
    },
  };
//   writeStudentSync(dataSync);
//   writeStudentAsync(dataAsync);


//=================================================================================================================


   // Read from students.json
   function readStudentSync(){
    return fs.readFileSync("students.json","utf-8");
   }
   function readStudentAsync(){
     fs.readFile("students.json","utf-8",(error,data)=>{
    if(error){
       return  console.log(`error read data with async ${error}`);
    }
    if(data){
        return console.log(`read data with async successfully: ${data}`);
    }
});
   }

readStudentSync();
readStudentAsync();

//=================================================================================================================

   // Add a new student
   const data=readStudentSync();
   const parseData=JSON.parse(data);
   parseData.push({
    id: 6,
    name: "rrrr",
    age: 24,
    course: "Web Development",
    grades: {
      html:200,
      javasc0ipt: 200,
    },

   });
   writeStudentSync(parseData);


//=================================================================================================================

   // (bonus) Update a student's course
   function updateCourse(studentId, updatedCourse){
    const data = readStudentSync();
    const students = JSON.parse(data); 
    const student=students.find((stu) => stu.id===studentId);
    if(student){
        student.course=updatedCourse;
        writeStudentSync(students);
        console.log("update done successfully");

    }
    else{
        console.log("error when update");
    }
   }

   updateCourse(6,"mobile Development")

//=================================================================================================================

   // (bonus) Delete a student
   function deleteStudent(studentId){
    const data = readStudentSync();
     let students = JSON.parse(data);
     students=students.filter((stu) => stu.id!==studentId);
        writeStudentSync(students);
        console.log("delete done successfully");
   }
   deleteStudent(1);

//=================================================================================================================
   //Compare the behavior of sync vs async operations
//    sync==>block the whole code untill the function ends 
//    async==>run the function in the background and when its finished disply its results and dont block the running of the rest of the code