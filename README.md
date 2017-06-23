# Single Page Application - NodeJs MongooseJs AngularJs

Sample application using Angular.js, Node.js, and MongoDb


## Requirements
- Node.js
- Node Package Manager
- Mongoose: Make sure you have your own local or remote Mongoose database URI configured in `config/database.js`


## Installation

- Clone the repository: `git clone https://github.com/praveenkanchan/nodejs-mongodb-angularjs.git`
- Install the application: `npm install` or `sudo npm install`
- Place your own Mongoose URI in `config/database.js`
- Start the server: `npm start`
- View in browser at `http://localhost:1800`


### Directory Layout
    
    api/                        --> api config.
      models/                   --> api models.
        usermodel.js            --> custom user model.
      routes/                   --> api routes.
        users.js                --> custom user route for serving JSON.
    config/                     --> application config files.
      database.js               --> custom application database.
      route.js                  --> custom application route for load page.
    public/                     --> all of the files to be used in on the client side.
      css/                      --> css files.
        bootstrap.min.css       --> responsive bootstrap file.
        style.css               --> default stylesheet.
      images/                   --> image files.
      js/                       --> javascript files.
        angular/                --> angularjs files.
          angular-route.min.js  --> the latest angular js.
          angular.min.js        --> the latest minified angular js.
        factory/                --> angularjs factory files.
          apicall.js            --> custom angular factory.
        other/                  --> other js files.
          jquery.js             --> google jquery min file.
        pages/                  --> application page files.
          index.html            --> application rendering page.
        main.js                 --> declare app module and application controller.
    views/                      --> html view files.
      index.html                --> main page for app
    app.js                      --> declare node module. 
    package.json                --> for npm
    

## Resources

- ExpressJS - [http://www.expressjs.com](http://www.expressjs.com)
- MongooseJS - [http://mongoosejs.com](http://mongoosejs.com)
- AngularJS - [http://www.angularjs.org](http://www.angularjs.org)
- Node.js - [http://www.nodejs.org](http://www.nodejs.org)