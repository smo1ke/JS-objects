"use strict";

// 1. Cоздать объект student, который содержит следующие свойства: имя, фамилию, пол (isMale), контактные данные, методы: вывод адреса, смена пола (на противоположный).
const student = {
  firstName: "John",
  lastName: "Johnson",
  isMale: "man",
  email: "john1987@gmail.com",
  adress: "Los Angeles, venice beach 12, USA",
  getStudentAdress() {
    return this.adress;
  },
  changeMale() {
    return (this.isMale = "woman");
  },
};

console.log(student.getStudentAdress());
console.log(student.changeMale());
// 2. Cоздать объект, который содержит свойства о факультете и кафедре, методы: переименование факультета (метод должен принимать в качестве параметра новое название факультета).

const university = {
  faculty: "Юридический",
  department: "Хозяйственное право",
  renameFaculty() {
    return (this.faculty = "Гражданское право");
  },
};

console.log(university.renameFaculty());

// 3 Создать функции-конструкторы:
// - книга (автор, название, год издания, издательство)
//   * предусмотреть в прототипе метод, который будет возвращать возраст книги в годах.

function Book(author, title, year, publishing) {
  (this.author = author),
    (this.title = title),
    (this.year = year),
    (this.publishing = publishing);
}

const bookProto = {};

bookProto.sumOfYears = function () {
  return 2022 - this.year;
};

Book.prototype = bookProto;

const book1 = new Book("Sapcovskiy", "Vedmak", 2006, "Piter");

console.log(book1.sumOfYears());
