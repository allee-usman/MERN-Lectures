/*
$: npm is a standard package manager for node.js

//* It has two key roles:
1st -> maintain library of packages
//? Packages are useful code written by other developers. React.js & Express.js are two examples of npm packages.
2nd -> It is a command line tool which is installed by default with node.js

//* installing packages:
1.  command: npm install [packageName] OR npm i [packageName]

* node-modules: this folder contains every installed dependency for your project.

* package-lock.json: it records exact version of installed dependencies, including its sub-dependencies and their versions.

To use dependencies, we need to make index.js file in main directory.

* package.json: It stores descriptive and functional metadata about a project such as name, version and dependencies.

2.  npm install
    install all the dependencies given in the package.json

3.  npm init
    initialize the package.json for your project    

4.  npm install -g [packageName]
    install any package globally. Before installing the package globally, we need to run "sudo chown -R $USER/usr/local/lib/node_modules" command to take admin access. Otherwise, an error will be thrown.
    Before using the global package, we need to link it with the current directory

5.  npm link [packageName]
    Link global package to the current directory.
      
*/