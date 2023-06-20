# DirectoryDice 

By dunderCats  

06.12.2023 

## Overview 

DirectoryDice is a versatile and user-friendly application designed to simplify the process of creating and managing organization directories or class rosters.  Whether you are a teacher, event planner, or manager running a company, DirectoryDice simplifies the process of creating and managing an interactive roster that brings convenience, efficiency, and fun. 

## User Stories 

As a user, I can … 

Register and log into the application 

Navigate the application pages easily 

See all members in the directory 

Add, update, edit, and delete members 

Search for a member 

Select one member randomly 

Randomly cluster/generate a group 

## MVP  

A user will see all members in the directory upon page load 

A user can search for one member by name 

A user can add a new member to the directory via URL 

A user can randomly select one member 

 
## Stretch Goals 

A user can edit a member 

A user can delete a member 

A user can add a new member to the directory via file upload 

A user can register/login via authentication/authorization 

A user will be assigned a user profile or admin profile based on authorization 

A user can access the group picker 


### Creating SQL table with Seed

For this app you will need to create a SQL database. First, create table using this script in sql work bench:

CREATE TABLE members (
    member_id int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
    first_name varchar(255) UNIQUE,
    last_name varchar(255) ,
    title varchar(255),
    prof_pic text
);

### Updating your credentials
inside the server directory, make sure password for pool.js and seed.js is updated to represent your sql server credentials.

### Adding the data to the table
In the Command Line inside the app directory run the following command: node server/seed.js

### Running the app
"npm run seed" (to initially seed the db after creation), "npm run serverStart" (in one terminal to start the backend), and npm start (in another terminal to start the front end).










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
