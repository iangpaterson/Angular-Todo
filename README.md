# Angular Todo App

## Overview

### What is this app for?

This is a Todo app. It helps users to keep track of things they have todo.

### What does it do?

This app will allow users to register and login. Once users have done that, they'll be able to create items to add to their todo list. Once they've created  their todo list, they'll be ale to update the status of each item and even delete items!

### How does it work?

This app uses JSON Web Tokens to authenticate users and keep them logged in. All the data is consumed from an API hosted on Heroku using AngularJS. The site is styled with Bootstrap.

## Features

### Existing Features
- None yet!

### Features Left to Implement
- User Based Features
    - Registration
    - Login
    - Logout
- Todo Based Features
    - Creating Todo Items
    - Updating Todo Items
    - Deleting Todo Items

## Tech Used

### Some of the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](https://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks

## Contributing

### Getting the code up and running

1. Firstly you'll need to clone this repository by running the ```git clone https://github.com/iangpaterson/angular-todo``` command
2. After you've done that you'll need to make sure you have **npm** and **bower** installed
    1. You can get **npm** by installing Node from [here](https://nodesjs.org/en/)
    2. Once you've done this you'll need to run the following command:
        `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
    ```
    npm install

    bower install
    ```
4. After those dependencies have been istalled you'll need to make sure you have **http-server** installed. You can do this by running the following: ```npm install -g http-server # this may also require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then simply submit a pull request
