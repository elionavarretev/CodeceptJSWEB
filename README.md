
[![N|Solid](https://saadichouaib.com/wp-content/uploads/2017/08/codeceptjs.png)](https://codecept.io/)

# Setting up
To run this tutorial, you will need:
* [WebDriver](https://github.com/Codeception/CodeceptJS/blob/master/docs/helpers/WebDriver.md) - WebDriver protocol.
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) - Dependency manager.

Code Editor:
* [VisualCode](https://code.visualstudio.com/) 
* [Notepad++](https://notepad-plus-plus.org/downloads/)

> Make sure that the Bracket Pair Colorizer, Cucumber Full Language Support, Prettier - codeFormatter plugins is enabled.

Now clone this project to your local machine:

```sh
$ git clone https://github.com/elionavarretev/CodeceptJSWEB.git
```

# Building the project
This project uses a node.js. To run the tests and build an executable jar, open the terminal and run:

```sh
$ npm init --y
```

then, you will need codecepJS, Appium and Webdriver.

```sh
$ yarn add codeceptjs --save
$ yarn add webdriverio@5.13.0 --save
```

# How To Run From Command Line

```sh
$ codeceptjs run --grep @products --reporter mochawesome >./log/server.log
```

# Note:
Please run and review the code
If you think something needs to be improved; you can indicate the file issue or submit PR.



