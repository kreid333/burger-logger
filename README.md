# Burger Logger


## Description 

For this project, I had to create an application that allows you to input burger names and decide if that burger has been devoured or not.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Finished Project](#finished-project)
* [Credits](#credits)
* [License](#license)

## Installation

To use this application, run `npm install` to install the packages that are listed as dependencies in the package.json. You must also create a database using the 'schema.sql' included in this project.

## Usage 

The user must run `node server.js` in order to start their local server. After opening their local host in browser, they can then add as many burgers as they please by inputting a burger name into the input; these burgers will then be added to the 'Burgers to eat' column with a 'Devour!' button next to the burger name. If the devoured button is clicked, it will move that listing to the 'Devoured!' column of the page. 

Instead of running locally, the application can also be ran here:
 * [Burger Logger](https://kreid333-burger-logger.herokuapp.com/)

## Finished Project

![Eat-Da-Burger!](https://user-images.githubusercontent.com/67942678/96349799-f14a4700-107f-11eb-8fb9-206e9c444440.gif)

## Credits

* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [MySQL](https://www.mysql.com/)



## License

MIT License

&copy; 2020, Kai Reid

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.