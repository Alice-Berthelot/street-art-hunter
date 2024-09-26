<p align="center">
  <img src="client/src/assets/images/logoblue.png" alt="logo street art hunter" width="30%"/>
</p>

## ⚡ Introduction

<br/>

_**Street Art Hunter** is the final group project I participated in during my training at the Wild Code School. I made several modifications to this project in order to present it for my **Professional Certification**, which was successful._

**Concept:** full-stack web app that allows users to discover street art pieces around them on a map. Different types of users (visitors, registered users, admins). Registered users can upload pictures directly from the app using a camera. If their submissions are validated by admins, they can earn points.

**Requirements:** the school required us to develop a full-stack app which involved creating a RESTful API, implementing a database, and developing CRUD operations. Before that, we had to define the CDM/LDM/PDM, write user stories, and design wireframes and mockups.

**Language:** 🇫🇷

<br/>

## 🚀 Achievements 

<br/>

**My completed tasks:** 
- implemented browsing of art pieces on the map ;
- enabled viewing the details of the art pieces selected by the user ;
- developed the entire score page ;
- developed the entitre profile page, with associated functionalities (edit information, delete profile and all related user content, change appearance based on user role, etc.) ;
- developed most of the admin pages and closely guided the person in charge of the others ;
- developed login and logout functionalities (for example, manually configured the use of tokens stored in the localStorage) ;
- built the database and its seeders ;
- implemented CRUD functionalities to link data between server and client ;
- used Express Static to serve images stored on the server to be displayed in the app ;
- used the Node.js filesystem module to delete image files stored on the server ;
- implemented protected routes in React ;
- developed middlewares to ensure server-side secure access to profile and admin features ;
- wrote basic unitary tests.

**Priority areas for improvement:** strengthen the security (for example: implementing xsrf tokens), introduce new functionalities (allowing users to delete only parts of their content, comparing existing art pieces, and creating itineraries), add legal mentions, and increasing the number of tests.

<br/>

## 🔧 Technologies and tools

<br/>

<p align="left"> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a></p>
<p align="left"><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/></a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/></a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/></a> <a href="https://documentation-harmonia.vercel.app/" target="_blank" rel="noreferrer"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzh1jbRrlTQ8Ez75ttwqXcCQdCHnukGFxMg&s" alt="harmonia" width="40" height="40"/></a></p>
<p align="left"><a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a></p>
<p align="left"><a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/></a> <a href="https://excalidraw.com/" target="_blank" rel="noreferrer"> <img src="https://refer-production.s3.us-east-2.amazonaws.com/favicon/excalidraw.com/04e9e487-b1b4-4217-ac2f-7c2129fed8ce.jpg" alt="excalidraw" width="40" height="40"/></a></p>

<p>Other tools:
<ul>
  <li><b>Fetch</b>: JavaScript interface for making data requests to a server;</li>
  <li><b>Argon2</b>: algorithm for password hashing;</li>
  <li><b>JWT</b>: open standard to generate secure connection tokens;</li>
  <li><b>React-Leaflet</b>: JavaScript library for creating interactive maps;</li>
  <li><b>React Webcam</b>: ReactJS library for uploading pictures or videos using the user's camera;</li>
  <li><b>React Icons</b>: ReactJS library for icons;</li>
  <li><b>React Toastify</b>: ReactJS library for notifications;</li>
  <li><b>Faker</b>: JavaScript library generating fictitious and realistic data;</li>
   <li><b>Multer</b>: Node.js middleware for handling and storing multimedia files sent through forms;</li>
  <li><b>Splide</b>: library for creating sliders.</li>
  <li><b>Supertest</b>: Node.js library for tests.</li>
</ul></p>

<br/>

## ⭐ Final overview

<br/>

_Deployment coming soon!_

<br/>

<p align="center">
  <img src="client/src/assets/images/logo-small.png" alt="mobile version logo" width="5%"/>
</p>

<br/>
<br/>
<br/>

## WILD CODE SCHOOL INSTRUCTIONS

This project uses Harmonia. Harmonia is a framework meant to serve as a foundation for every project following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying a pedagogical tool.

## Setup & Use

**Windows users:** be sure to run these commands in a git terminal to avoid [issues with newline formats](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats):

```
git config --global core.eol lf
git config --global core.autocrlf false
```

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm install`
- Create environment files (`.env`) in both `server` and `client`: you can copy `.env.sample` files as starters (**don't** delete them)

### Available Commands

- `db:migrate` : Run the database migration script
- `db:seed` : Run the database seed script
- `dev` : Starts both servers (client + server) in one terminal
- `dev:client` : Starts the React client
- `dev:back` : Starts the Express server
- `lint` : Runs validation tools (will be executed on every _commit_, and refuse unclean code)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS

## Deployment with Traefik

> ⚠️ Prerequisites : You must have installed and configured Traefik on your VPS beforehand.
> https://github.com/WildCodeSchool/vps-traefik-starter-kit/

For deployment, you have to go to `secrets` → app `actions` on the github repo to insert via `New repository secret` :

- SSH_HOST : IP address of your VPS
- SSH_USER : SSH login to your VPS
- SSH_PASSWORD : SSH connection password to your VPS

And a public variable from the tab `/settings/variables/actions` :

- PROJECT_NAME : the name of the project used to create the subdomain.

> ⚠️ Warning : underscores are not allowed. They can cause trouble with the let's encrypt certificate

Use this same tab to add the other environment variables required for the project if any.

Only the server will be accessible. The root path `"/"` will redirect to the dist folder of your client. In order to allow that, please uncomment the line as explained in `server/src/app.js` (Line 102).
Because the server will also serve the client, the global variable VITE_SERVER_URL will be set with an empty string.

Your url will be ` https://${PROJECT-NAME}.${subdomain}.wilders.dev/`.

### About the database

The database is automaticaly deployed with the name of your repo. During the build of the projet (`docker-entry.sh`), the `node migrate.js` command is executed in the server. If you want to seed automaticaly your database using the `seed.js` script, replace the `cd ./server && node ./bin/migrate.js && node index.js` by `cd ./server && node ./bin/migrate.js && node ./bin/seed.js && node index.js`

### About public assets (pictures, fonts...)

Don't use any public folder on your client. This folder won't be accessible online. You may move your public assets in the `server/public` folder. Prefer [static assets](https://vitejs.dev/guide/assets) when possible.

### About Specific Environment Variables (e.g., Email)

Students should use the template provided in the `*.env.sample*` file as `<PROJECT_NAME><SPECIFIC_NAME>=<THE_VARIABLE>`.

> ⚠️ **Warning:** The `PROJECT_NAME` should match the one used in the Git public variable.

To add it during deployment, follow these 2 steps:

- Add the following variable to the `docker-compose.prod.yml` file (as shown in the example: `PROJECT_NAME_SPECIFIC_NAME: ${PROJECT_NAME_SPECIFIC_NAME}`).
- Connect to your server via SSH. Open the global `.env` file in Traefik (`nano ./traefik/data/.env`). Add the variable with the correct value and save the file.
- Afterward, you can initiate automatic deployment. Docker will not refresh during this process.

### About Logs

If you want to access the logs of your online projet (to follow the deployement or to watch any bug error), connect to your VPS (`ssh user@host`).
Then, go on your specific project and run  `docker compose logs -t -f`.
