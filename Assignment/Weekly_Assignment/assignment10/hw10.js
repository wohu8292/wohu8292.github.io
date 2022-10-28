// problem #1
console.log("problem #1");

function employee_con(first_name,department,designation,salary,raise_eligible) {
  this.first_name = first_name;
  this.department = department;
  this.designation = designation;
  this.salary = salary;
  this.raise_eligible = raise_eligible;
}

var employee = new Array();

var emp1 = new employee_con("Sam", "Tech", "Manager", 40000, true);
employee.push(emp1);
var emp2 = new employee_con("Mary", "Finance", "Trainee", 18500, true);
employee.push(emp2);
var emp3 = new employee_con("Bill", "HR", "Executive", 21200, false);
employee.push(emp3);

jemp = JSON.stringify(employee);
console.log(jemp);

// problem #2
console.log("problem #2");

var company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employee,
};

jcom = JSON.stringify(company);
console.log(jcom);

// problem #3
console.log("problem #3");

var emp4 = new employee_con("Anna", "Tech", "Executive", 25600, false);
employee.push(emp4);

jemp = JSON.stringify(employee);
jcom = JSON.stringify(company);
console.log(jemp);
console.log(jcom);

// problem #4
console.log("problem #4");

let ocom = JSON.parse(jcom);
let total_salary = 0;

for (let i = 0; i < ocom.employees.length; i++) {
  total_salary += ocom.employees[i].salary;
}

console.log("total_salary: ", total_salary);

// problem #5
console.log("problem #5");

function raise_time(employee) {
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].raise_eligible == true) {
      employee[i].salary += employee[i].salary * 0.1;
      employee[i].raise_eligible = false;
    }
  }
}

oemp = raise_time(employee);
jemp = JSON.stringify(employee);
jcom = JSON.stringify(company);
console.log(jemp);
console.log(jcom);

// problem #6
console.log("problem #6");

company.Working_from_home = ["Anna", "Sam"];
jcom = JSON.stringify(company);
console.log(jcom);

for (let i = 0; i < employee.length; i++) {
  for (let j = 0; j < company.Working_from_home.length; j++) {
    if (employee[i].first_name === company.Working_from_home[j]){
      employee[i].wfh = true;
    }
    else {
      employee[i].wfh = false;
    }
  }
}

jemp = JSON.stringify(employee);
console.log(jemp);

