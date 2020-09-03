var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Phoenix13$',
  database : 'employees_db'
});
 
connection.connect();

module.exports = {
  getDepartments() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM departments', function (error, results) {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
  getRoles() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM roles', function (error, results) {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
  getEmployees() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM employees', function (error, results) {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
  addDepartment(department) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO departments SET ?', department, function (error, results) {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
  addRole(role) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO roles SET ?', role, function (error, results) {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
  addEmployee(employee) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO employees SET ?', employee, function (error, results) {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
  updateEmployee(id, employee) {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE employees SET ? where ?', [employee, {id: id}], function (error, results) {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
}