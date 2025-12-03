
function Course(name) {
    this.name = name;
    this.students = [];
}


Course.prototype.addStudent = function(student) {
    this.students.push(student);
    student.courses.push(this);
};


function Teacher(name) {
    this.name = name;
    this.courses = [];
}


Teacher.prototype.addCourse = function(course) {
    this.courses.push(course);
};



function Student(name) {
    this.name = name;
    this.courses = [];
}


Student.prototype.viewCourses = function() {
    return this.courses.map(c => c.name);
};




console.log("=== ТЕСТУВАННЯ СИСТЕМИ УПРАВЛІННЯ КУРСАМИ ===");


const courseJS = new Course("JavaScript");
const courseHTML = new Course("HTML & CSS");


const teacherIvan = new Teacher("Іван Петрович");


const studentOleh = new Student("Олег");
const studentAnna = new Student("Анна");


teacherIvan.addCourse(courseJS);
teacherIvan.addCourse(courseHTML);

console.log("Курси викладача:", teacherIvan.courses.map(c => c.name));


courseJS.addStudent(studentOleh);
courseJS.addStudent(studentAnna);
courseHTML.addStudent(studentAnna);

console.log("Студенти на курсі JavaScript:", courseJS.students.map(s => s.name));
console.log("Студенти на курсі HTML:", courseHTML.students.map(s => s.name));


console.log("Курси Олега:", studentOleh.viewCourses());
console.log("Курси Анни:", studentAnna.viewCourses());
