const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "password",
  database: "directory_dice",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("connected to the database");

    //Perform db seeding here

    const insertDataQuery = `INSERT INTO members (first_name, last_name, title, prof_pic)

        VALUES ('Caridad', 'Robles', 'Academic Intern', '/profilePics/Caridad.png'),
        ('Daniel', 'Moreira', 'Academic Intern', '/profilePics/Dan.png'),
        ('Ethan', 'Lee', 'Academic Intern', '/profilePics/Ethan.png'),
        ('Farjana', 'Akter', 'Academic Intern', '/profilePics/Farjana.png'),
        ('Imane', 'Allay', 'Academic Intern', '/profilePics/Imane.png'),
        ('Karina', 'Velasquez', 'Academic Intern', '/profilePics/Karina.png'),
        ('Leonard', 'Mercedes', 'Academic Intern', '/profilePics/Leo.png'),
        ('Melissa', 'Schaefer', 'Academic Intern', '/profilePics/Mel.png'),
        ('Nicole', 'Portalatin', 'Academic Intern', '/profilePics/Nicole.png'),
        ('Mike', 'Reid', 'Academic Intern', '/profilePics/Reid.png'),
        ('Rob', 'Wadhwani', 'Academic Intern', '/profilePics/Rob.png'),
        ('Rosie', 'Gonzalez', 'Academic Intern', '/profilePics/Rosie.png'),
        ('Sacoya', 'Adams', 'Academic Intern', '/profilePics/Sacoya.png'),
        ('Samira', 'Boudjemai', 'Academic Intern', '/profilePics/Samira.png'),
        ('Tunisia', 'Artope', 'Academic Intern', '/profilePics/Tunisia.png'),
        ('Valerie', 'Perez', 'Academic Intern', '/profilePics/Valerie.png'),
        ('Xani', 'Gonzalez', 'Academic Intern', '/profilePics/Xani.png')`;

    connection.query(insertDataQuery, (err) => {
      if (err) {
        console.error("Error inserting data:", err);
      } else {
        console.log("Data inserted");
      }
    });

    connection.end();
  }
});

// CREATING SQL TABLE WITH SEED

//Make sure password for pool is updated to represent your sql server pw:

// First, create table using this script in sql work bench:

// CREATE TABLE members (
//     member_id int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
//     first_name varchar(255) UNIQUE,
//     last_name varchar(255) ,
//     title varchar(255),
//     prof_pic text
// );
