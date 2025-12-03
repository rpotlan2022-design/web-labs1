import { Teacher } from "./models/Teacher.js";
import { Student } from "./models/Student.js";
import { Course } from "./models/Course.js";


const courseJS = new Course("JavaScript");


const teacher = new Teacher("Igor");
teacher.addCourse(courseJS);

const student1 = new Student("Roman");
const student2 = new Student("Roman2");


courseJS.addStudent(student1);
courseJS.addStudent(student2);

student1.addCourse(courseJS);
student2.addCourse(courseJS);


console.log("Викладач:", teacher.name);
console.log("Курси викладача:", teacher.courses.map(c => c.title));

console.log("Студент:", student1.name);
console.log("Його курси:", student1.viewCourses());
