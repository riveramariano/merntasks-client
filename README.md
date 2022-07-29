# MERNTasks

Website link => [MERNTasks](https://merntasks-mrivera.netlify.app/).
<br>
Website Credentials => Email: `admin@admin.com` - Password: `123456`

## Summary

This is my first big application usign React, hope you liked it :), any suggestions or recommendations dm me.

## Scope

Create a web page that allows the user to add tasks and subtasks to manage them online (it has a certain resemblance to the Trello tool). This project also has a registration and login that will validate the user to show only the information pertaining to it. 

## Functionality

This repository only contains the client view of the application, in this repository there are the React components for registration, login, add projects, add tasks to projects, edit tasks and error messages. React states were handled thanks to the react hook "useContext". An axios client was also created to connect to the backend of the application that was uploaded to Heroku. User authentication is done through JWT (Json Web Token) and lasts for 1 hour. For the information management I used mongo as the database, node and express. However, the application's backend repository will not be available due to sensitive information. 

## Design

The design of the application is simple, it is a single style sheet for the entire application and an animation was added to the list of user projects when deleting or adding a new project; this same animation is present when creating and deleting tasks, the animation is from the "react-transition-group" library. 

### Learning 

In the development of this project, I learned: 
- The useContext hook.
- To create an axios client.
- To authenticate through JWT.
- To create redirects.
- To connect a backend on Heroku.
- To create a Netlify redirect. 

### Tech Stack
- MERN (MongoDB, Express.js, React.js, Node.js).

### Run Locally

- Clone the repository `https://github.com/riveramariano/merntasks-client.git`.
- Open the cmd and get the project route.
- Run `npm install` for the dependencies.
- Run `npm start` (The project should run in the default browser).
