### Iowa Golf

    We have created a new app to help track your golf scores in a fun and easy way. Just create your user and select the course you are playing to track you golf game!

## Wireframe

# Planning

    http://framebox.org/AKUAa-zbqYQK

## Installation Instructions

# Backend

    - pip3 install django
    - pip3 install psycopg2-binary
    - pip3 install pipenv
    - pipenv shell
    - Pipenv install django djangorestframework django-rest-knox

# Frontend

    - npm init -y
    - npm install  -D webpack webpack-cli
    - npm install -D @babel/core babel-loader @babel/preset-env - @babel/preset-react babel-plugin-transform-class-properties
    - npm install react react-dom react-router-dom prop-types

# Redux

    - Npm install redux react-redux redux-thunk            redux-devtools-extension
    - Npm install axios

# CSS

    - npm install style-loader
    - npm install --save-dev css-loader

## Technologies Used in making this game:

- **Command Line**: used for interacting with the computer, navigating the filesystem

- **Post Man**: used for interacting with the PostgressDB

- **Source Control**: used for interaction, management and upload changes on code to Git repository

- **Visual Studio Code**: used for coding with HTML, CSS, REACT, Django and JavaScript

- **Google Chrome Web Browser**: used for launching the website

- **Google Chrome Developer Tools**: used to debug and solve problems in the code

- **Heroku**: used for hosting app

## User Stories

1. Create 3 models (Player, Scores, Courses)
2. Build out Django backend with viewsets(CRUD)
3. Create react front end that uses redux to connect to backend API
4. Create list to show all course
5. Build form to Add player and courses
6. Build form to add scores(needs to have course and player in dropdown)
7. Setup up post to databse that saves populated dropdown fields
8. Add CSS to scores table(to look like a golf score card)
9. Add authentication
10. When user logs in the username should populate on the scores form as well as the course selected from the intial course selection.
11. Setup a player dashboard to show player scores
