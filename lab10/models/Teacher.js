import { Person } from "./Person.js";

export class Teacher extends Person {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
        console.log(`Курс "${course.title}" додано викладачу ${this.name}`);
    }
}
