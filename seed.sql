INSERT INTO department (department_name)
VALUES ("Fleet Department");

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Fleet Manager", 40.00, 1),
    ("Administrative Coordinator", 25.00, 1),
    ("Administrative Assistant", 20.00, 1),
    ("File Clerk", 15.00, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ("Jacob","Smith","fleet manager-1110", 1),
    ("Jennifer","Baker","Administrative Coordinator-1111", 1),
    ("Denise","Munoz","Adminstrative Assistant-1112", 2),
    ("Steven","Cooper","File Clerk-1113", 2);

-- INSERT INTO roles (department_id)
-- VALUES ("", false);

-- Updates the row where the column name is peter --
-- UPDATE people
-- SET has_pet = true, pet_name = "Franklin", pet_age = 2
-- WHERE id = 4;

-- SELECT * FROM people;
