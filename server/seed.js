const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'directory_dice'
})

connection.connect((err)=>{
    if(err){
        console.error('Error connecting to the database:', err);
    }else{
        console.log('connected to the database');

        //Perform db seeding here

        const insertDataQuery = `INSERT INTO members (first_name, last_name, title, prof_pic)

        VALUES ('Caridad', 'Robles', 'academic intern', '../profilePics/Caridad.png'),
        ('Daniel', 'Moreira', 'academic intern', '../profilePics/Dan.png'),
        ('Ethan', 'Lee', 'academic intern', '../profilePics/Ethan.png'),
        ('Farjana', 'Akter', 'academic intern', '../profilePics/Farjana.png'),
        ('Imane', 'Allay', 'academic intern', '../profilePics/Imane.png'),
        ('Karina', 'Velasquez', 'academic intern', '../profilePics/Karina.png'),
        ('Leonard', 'Mercedes', 'academic intern', '../profilePics/Leo.png'),
        ('Melissa', 'Schaefer', 'academic intern', '../profilePics/Mel.png'),
        ('Nicole', 'Portalatin', 'academic intern', '../profilePics/Nicole.png'),
        ('Mike', 'Reid', 'academic intern', '../profilePics/Reid.png'),
        ('Rob', 'Wadhwani', 'academic intern', '../profilePics/Rob.png'),
        ('Rosie', 'Gonzalez', 'academic intern', '../profilePics/Rosie.png'),
        ('Sacoya', 'Adams', 'academic intern', '../profilePics/Sacoya.png'),
        ('Samira', 'Boudjemai', 'academic intern', '../profilePics/Samira.png'),
        ('Tunisia', 'Artope', 'academic intern', '../profilePics/Tunisia.png'),
        ('Valerie', 'Perez', 'academic intern', '../profilePics/Valerie.png'),
        ('Xani', 'Gonzalez', 'academic intern', '../profilePics/Xani.png')`

          
        connection.query(insertDataQuery, (err) => {
        if (err) {
            console.error('Error inserting data:', err);
        } else {
            console.log('Data inserted');
        }
        });

        connection.end();
    }
})



// CREATING SQL TABLE WITH SEED



//Make sure password for pool is updated to represent your sql server pw: 


// First, create table using this script in sql work bench: 


// CREATE TABLE members (
//     member_id int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
//     first_name varchar(255) UNIQUE,
//     last_name varchar(255) ,
//     title varchar(255),
//     prof_pic varchar(255)
// );


