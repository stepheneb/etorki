
# Etorki

A friendly JavaScript kind of cheese.

Ruby gem prerequisites:

  jspec
  

Run the tests:

  jspec run


Run the tests headless using Rhino and Env.js:

  java -jar spec/support/js.jar -opt -1 spec/rhino.js

  (output is to test-reports/jspec.xml)
  

Run the Rhino+Env.js tests with output to the terminal:

  spec/jspec-rhino
  

Run jslint on the etorki js file:

  lint/run-lint
  
  
