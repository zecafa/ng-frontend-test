#ng-frontend-test

>Based on angular generator [generator-cg-angular](https://github.com/cgross/generator-cg-angular).


Installation
-------------
   Prerequisite: Node
   
   Clone this repository:
      git clone git@github.com:zecafa/ng-frontend-test.git
      cd ng-frontend-test
   
   Next, install grunt and project dependencies:
   
    npm install -g grunt-cli
    npm install
    bower install
   
   Launch the app in dev environment:

    grunt run  - it will open your chrome and run the application
    
   If the application doesn't open automatically in your browser, you can access to it manually at:
      
    http://localhost:9000/app/
    
    
   
   Build a fully optimized (minified, concatenated, and more) in /dist:
   
    grunt build
