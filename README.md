<div align="center">

  ![LegoDoc](https://imgur.com/cRFAecF.png)

  [![Hackathon](https://img.shields.io/badge/hackathon-Mumbai-orange.svg)](http://mumbaihackathon.in/) 
  [![Status](https://img.shields.io/badge/status-active-green.svg)]()
  [![GitHub Issues](https://img.shields.io/github/issues/chaitanyadukkipaty/LegoDoc.svg)](https://github.com/chaitanyadukkipaty/LegoDoc/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/chaitanyadukkipaty/LegoDoc.svg)](https://github.com/chaitanyadukkipaty/LegoDoc/pulls)
  [![License](https://img.shields.io/badge/license-GNU-blue.svg)](LICENSE.md)

</div>
<p align="center">Currently live on: https://legodoc.chaitanyad.com/</p>

# Table of Content
+ [About](#description)
+ [Getting Started](#getting_started)
+ [Limitations](#limitations)
+ [Future Scope](#future_scope)
+ [File Structure](#file_structure)
+ [Contributing](#contributing)
+ [Authors](#authors)

## About<a name="description"></a>
+ LegoDoc is a platform for downloading / customizing contracts and other legal document templates which are curated by the people.
+ Our mission is to make these templates freely available for everyone, while in the process making them easier to customize and use.
+ Any registered user can upload or write a new document.
+ Posts will be filtered with the help of feedback (upvotes / downvotes).
+ Helping people save hundreds, or even thousands of rupees to make an enforceable agreement.
+ All the documents are free to download, customize and store.
+ Note that every situation is unique and, if you are unsure of which template to use, we recommend you talk to an attorney.
+ Remember: we do not and cannot provide legal advice. Neither are we a substitute for the work of a law firm or an attorney. 

## Getting Started<a name="getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

Installing NodeJs
```
$ sudo apt-get install nodejs
```
Installing VueJs
```
$ npm install -g @vue/cli
```
### Installing

A step by step series of examples that tell you how to get a development env running

Cloning the repo
```
$ git clone https://github.com/chaitanyadukkipaty/LegoDoc.git
```
Installing the dependencies
```
$ cd LegoDoc
$ npm install
$ cd web/lego/
$ npm install
```
If you are running a development environment, use the following command:
```
$ npm run serve 
```
If you are running a deployment environment, use the following command:
```
$ npm run build
```

Running the server
```
$ node server.js
```
The application will now be running on https://localhost:8080/

## Built With<a name="built_with"></a>
+ [MongoDB](https://www.mongodb.com/) - Database
+ [Express](https://expressjs.com/) - Server Framework
+ [VueJs](https://vuejs.org/) - Web Framework
+ [NodeJs](https://nodejs.org/en/) - Server Environment

## Limitations<a name="limitations"></a>
+ No mechanism to generate revenue apart from ads.

## Future Scope<a name="future_scope"></a>
+ A GitHub type pull request / issues feature
+ Users being able to comment on the documents

## File Structure <a name="file_structure"></a>
/server.js  : Main server code <br>
/web/lego  : Website code <br>
/models     : Data structures and methods to access them <br>

## Contributing<a name="contributing"></a>

1. Fork it (<https://github.com/chaitanyadukkipaty/LegoDoc/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Authors<a name="authors"></a>

+ [Calden Rodrigues](https://github.com/caldenrodrigues) <br>
+ [Chaitanyakrishna Dukkipaty](https://github/chaitanyadukkipaty) <br>
+ [Kyle Lobo](https://github.com/kylelobo) <br>
+ [Roshan James](https://github.com/sephiroth7712) <br>

See also the list of [contributors](https://github.com/chaitanyadukkipaty/LegoDoc/contributors) who participated in this project.
