/*
$ import: import is similar to require(), but it is modern and has been released in ES6.

* To use import method, following are thr prerequisites:
1.  package.json file having type: "module" property
2.  export the module from export file
i.e:
*/

import { sum, PI} from "./math.js" //remember to add file extension too in path
console.log(PI); //output: 3.1415

/*
* Benifits of "import" over "require()":
1.  We can seletively load the pieces of a file with the help of import, whereas with "require()" it isn't possible as it load the whole file.

2.  Loading is synchronous for "require()", but "import" load the module asynchronously.

*/

