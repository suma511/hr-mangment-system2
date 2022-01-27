'use strict';
let employeesForm = document.getElementById('employeeForm');

 let count =0;
const tax = 0.075;
function Employee(id, fullName, departMent, level, imageUrl) {
  this.id = id;
  this.fullName = fullName;
  this.departMent = departMent;
  this.level = level;
  this.imagePath = `./images/${this.name}.PNG`;
  this.salary = 0;
}

function generateid(num){
    let n = 1 ;
    let string = "" + num ;
    let pad ="0000";
    n= pad.substring(0,pad.length-string.length)+string;
    num++;
    return n;
}
function handelSubmit(event){
event.preventDefault();
let name=event.target.name.value;
let image=event.target.imgurl.value;
let departMent=event.target.departMent.value;
let level=event.target.level.value;
let id = generateid() ;
console.log(`${id} ${name} ${image} ${level} ${departMent}`);

}
employeesForm.addEventListener('submit',handelSubmit) ;


function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

Employee.prototype.finalsalary = function () {
  let max, min;
  switch (this.level) {
    case ("senior"):
      max = 2000;
      min = 1500;
      this.salary = parseInt(randomNumber(min, max) - (randomNumber(min, max) * 0.075));
      break;
    case ("midsenior"):
      max = 1500;
      min = 1000;
      this.salary = parseInt(randomNumber(min, max) - (randomNumber(min, max) * 0.075));

      break;
    case ("junior"):
      max = 1000;
      min = 500;
      this.salary = parseInt(randomNumber(min, max) - (randomNumber(min, max) * 0.075));

      break;
  }
}

Employee.prototype.render = function () {
  console.log("hi");
  document.write(`<p> ${this.fullName}        ${this.salary}   </p>  `);
}











const Ghazi = new Employee(1000, "Gazi Samer", "adminstration", "senior");

const Lana = new Employee(1001, "Lana Ali", "Finance", "senior");

const Tamara = new Employee(1002, "Tamara Ayoub", "marketing", "senior");

const Safi = new Employee(1003, "Safi Walid", "adminstration", "medsenior");

const Omar = new Employee(1004, "Omar Zaid", "development", "senior");

const Rana = new Employee(1005, "Rana Saleh", "development", "junior");

const Hadi = new Employee(1006, "Hadi Ahmad", "finance", "medsenior");
