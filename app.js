'use strict';

function Grades (studentName ,course){
this.studentName = studentName ;
this.course = course ;
this.grade = randomGrade(); 

Grades.prototype.allStudent.push(this);
}

function randomGrade (){
    return Math.floor(Math.random() * (100 -0) +0 );
}

Grades.prototype.allStudent = [];

var form = document.getElementById('form');
var table=document.getElementById('table');

if(localStorage.getItem('student')){
   Grades.prototype.allStudent = JSON.parse(localStorage.getItem('student'));
   createHeader ();
   createStudent();
}
console.log(form);
form.addEventListener ('submit' , addStudent);

function addStudent(event){
event.preventDefault();

var studentNameValue = event.target.studentName.value ;
var courseValue = event.target.course.value ;
var grade = Grades.prototype.allStudent;

new Grades (studentNameValue , courseValue );
console.log(Grades.prototype.allStudent);
console.log(table);
form.innerHTML ='';
createHeader ();
createStudent();

localStorage.setItem  ('student' ,JSON.stringify(Grades.prototype.allStudent));
}

function createHeader (){

    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    var studentName =document.createElement('th');
    headerRow.appendChild(studentName);
    studentName.textContent = 'Student Name';

    var grade =document.createElement('th');
    headerRow.appendChild(grade);
    grade.textContent = 'Student Grade';

    var course =document.createElement('th');
    headerRow.appendChild(course);
    course.textContent = 'Course';

}

function createStudent(){

var studemtData = document.createElement('tr');
table.appendChild(studemtData);

 var studentName =document.createElement('td');
    studemtData.appendChild(studentName);
    studentName.textContent = Grades.prototype.allStudent.studentName; 

    var grade =document.createElement('td');
    studemtData.appendChild(grade);
    grade.textContent = Grades.prototype.allStudent.grade;

    var course =document.createElement('td');
    studemtData.appendChild(course);
    course.textContent = Grades.prototype.allStudent.course;
}

