/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* ++++++++++ Javascript Engine & JIT Compiler +++++++++++++ 
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//$ High level program translation into Machine Code:
/*
//* Translation can be done in three ways: 1) Compilation 2) Interpretation 3) Just in time translation

//? Compilation:
-> During compilation, the entire source code gets converted into machine code all at once.
-> The machine code is written into a portable file that can be executed anywhere – regardless of platform or operating system.
-> Two step process: In the first step, the machine code is built and in the second step, it is executed on the machine. So conversion of code is ahead of time.
-> It is faster than interpretation
//? Diagram:
            Source code  ---compilation--> Potable File(Machine Code i.e .exe) ---execution--> Program running


//? Interpretation:
-> On the other hand, during interpretation, the interpreter runs through the source code and translates & executes it line by line.
-> In interpretation, the code is read and executed at the same time, so machine code is not stored anywhere
-> Conversion of code does not happen ahead of time, but, instead, right before execution.
-> It is slower process than compilation

//? Diagram:
            Source code  ---interpretation-->  Program running

//* Why JIT compilation? : 
Well, JS used to be purely interpreted language. But the problem with interpreted language is that it is much much slower than the compiled language. And this used to ok for JS. But now with modren JS and fully fledged applications that we used nowadays, low performance is no longer acceptable. Just imagine that you are playing an online game on your browser, and, when you move a cube through a tile, it takes several seconds to reach the endpoint. Would such slowness be acceptable? Hence Current JavaScript Engine use the concept of both compilation and interpretation at the same time, which is known as Just-in-Time (JIT) compilation.

//? Just-in-Time Compilation (JIT):
-> In this approach, the whole source code gets compiled into machine language at once and then it is executed as soon as it is compiled.
-> Although it is two step process like compilation but there is no portable file to execute.

//? How JIT compilation works?:
//* 1st step) Code Parsing: 
As a new piece of JavaScript code enters the JavaScript Engine, the first step performed is parsing of the code. The JS engine only reads the code to check if there is any syntax error. If there is a syntax error, it then immediately throws an exception and stop reading. However, if there is no syntax error then the parser produces a data structure called as Abstract Syntax Tree (AST).

//Info: What an AST is?:
JS splits each line of code into pieces that are meaningful for the language i.e const,function keywords and then save these meaningful pieces into a tree like structure which later will be used to generate the machine code. This tree is known as the AST.

//* 2ns step) Translation:
JIT compiler then takes the AST and generates the machine code

//? Diagram:
            Source code  -----> code parsing ---AST--> JIT compiler ---Machine code--> Program Running
*/

/*
//Info: So far so good – at this point, our code is running and that should be the end of the process. Not so fast – JavaScript has some code optimization strategies to implement. In the beginning, JavaScript creates a very un-optimized machine code so that it can execute the scripts as fast as possible. Then, in the background, this un-optimized code gets recompiled and optimized, while the current code is executed. This is done most of the time and after each cycle of optimization, the un-optimized code gets exchanged for the more optimized code, without ever halting the execution. That is why the JavaScript Engine works so fast.
//Info: The process of code optimization happens in special threads, separate from the main thread. JavaScript developers cannot access the code optimization algorithm from our source code. Although different engines implement the strategy in different ways, in a nutshell, this is how modern JavaScript Just-in-time compilation works.
*/

