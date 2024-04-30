class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.marks = [];
    }

    addMark(mark) {
        if (!this.marks.includes(mark)) {
            this.marks.push(mark);
            console.log(`Оцінка ${mark} додана для ${this.name}`);
        } else {
            console.log(`Оцінка ${mark} вже існує для ${this.name}`);
        }
    }
}

class Group {
    constructor() {
        this.groupList = [];
    }

    addStudent(id, name) {
        const existingStudent = this.groupList.find(student => student.id === id);
        if (!existingStudent) {
            const newStudent = new Student(id, name);
            this.groupList.push(newStudent);
            console.log(`Студент ${name} з ID ${id} доданий до групи.`);
        } else {
            console.log(`Студент з ID ${id} вже існує у групі.`);
        }
    }

    addMarkToStudent(studentId, mark) {
        const student = this.groupList.find(student => student.id === studentId);
        if (student) {
            student.addMark(mark);
        } else {
            console.log("Студента з таким ID не знайдено.");
        }
    }

    showGroupList() {
        console.log("Список учасників групи:");
        this.groupList.forEach((student, index) => {
            console.log(`${index + 1}. ${student.name}: ${student.marks.join(', ') || 'немає оцінок'}`);
        });
    }
}

const group = new Group();

group.addStudent(1, "Влад");
group.addStudent(2, "Андрій");
group.addStudent(3, "Віктор");

group.addMarkToStudent(1, 5);
group.addMarkToStudent(2, 4);
group.addMarkToStudent(3, 3);

group.showGroupList();
