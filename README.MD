1) NodeJS : It is a javascript on the server which is run using V8 engine. 
example : document/window object belong to JS where as process/global belong to nodejs package. 

- Previously JavaScript was known as LiveScript,

- JavaScript is a scripting language, it cannot execute on its own, one needs a platform to execute it.

- Java Script was developed by Brendan Eich in Netscape in 1995 for coding in web pages allowing the logical operation to client edge. 

- Netscape 2.0 is the first where the implementation of JavaScript was first seen. 

- JavaScript is a scripting language : ie. it cannot execute on its own, it needs a platform to execute i.e. "browser"

- In earlier times JS was supported mainly by IE(Internet Explorer)

- In browser it is executed in JavaScript Engine. The presence of this engine in browser/server/

- Currently there are following versions of JavaScript Engine.
    - V8 is the google chrome, chromium engine.
    - SpiderMonkey is first engine built by NetScape.
    - Nashorn (Currently Java8 supports this engine), JScript, Rihno etc. 

- Following are the characteristics of JavaScript:

    * Object-Centered Script Language
    * Client edge Technology
    * Validation of User’s Input
    * Else and If Statement
    * Interpreter Centered
    * Ability to perform In Built Function
    * Case Sensitive format
    * Light Weight and delicate
    * Statements Looping
    * Handling Events
For more js : https://www.educba.com/features-of-javascript/

NODEJS:
--------
- What is NodeJS?
    - Event Driven
    - Non-Blocking Model 
    - Uses chrome V8 engine
    - Uses NPM Package EcoSystem.( Its like maven  )

Node Important Syntax. 
-----------------------
 - How to import required npm package in node
    {
        const var =  require('module') 
        var.inbuiltFunction(params);
    }
 - How to import the required js / resource file
    {
        const util = require('relativePath/fileName.ext')
        util.utilityFunction();
    }
 - How to import the required npm dependency 
    {
        const validator = require('validator')
        validator.isEmail("string")
    }

Why Does Node need NPM ??
---------------------------
 - Rather than reinventing the wheel, one can reuse validated and tested packages in NodeJS like emailValidator.

 Important Commands in NPM
 -------------------------- 
 - npm init 
    * It helps to initalize the nodejs project which is going to use the npm package modules. 
    * It add properties like sript/git/dependencies etc which are know during the      intialization of the project in pacakge.json
- npm i <pacakgename>@<version> 
    Alias : npm install <pacakagename>@<version>
    * It helps to add new depencny in node_modules.
    * 


Imporant Packages : To improve NodeJS development Environment 
- npm i -g intellisense.
- mpn i =g nodemon

