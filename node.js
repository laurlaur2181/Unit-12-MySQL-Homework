const inquirer = require("inquirer");

require("console.table");

const db = require("./db");

 
// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();

// //install inquirer code
// var inquirer = require("inquirer");
// inquirer.prompt([/* Pass your questions in here */], function( answers ) {
//     // Use user feedback for... whatever!!
// });

// //install table
// const table = cTable.getTable([
//     {
//       name: 'foo',
//       age: 10
//     }, {
//       name: 'bar',
//       age: 20
//     }
//   ]);
  
//   console.log(table);

async function displayMenu() {
  const answers = await inquirer.prompt([
    {
      type:"list",
      name:"action",
      message:"What would you like to do?",
      choices: [
        {
          name:"View Departments",
          value: displayDepartments
        },
        {
          name:"View Roles",
          value: displayRoles
        },
        {
          name:"Exit",
          value: exit
        }
      ]
    }
  ]);
  await answers.action();
}

async function displayDepartments() {
  const departments = await db.getDepartments();
  console.table(departments);
  await displayMenu();
}

async function displayRoles() {
  const roles = await db.getRoles();
  console.table(roles);
  await displayMenu();
}

function exit() {
  console.log("Thanks... Bye!");
}