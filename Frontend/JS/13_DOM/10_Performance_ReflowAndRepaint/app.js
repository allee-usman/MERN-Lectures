//$ Let say we want to add 100 paragraphs in HTML page using JS

//* Method 1:
// const t1 = performance.now(); //used to measure total execution time of code between two breakpoints
// for(i = 1; i <= 100; i++) {
//     let newParagraph = document.createElement('p')
//     newParagraph.textContent = `Paragraph ${i}`
//     document.body.appendChild(newParagraph)
// }
// const t2 = performance.now();
// console.log(`Time taken by method 1: ${(t2-t1)} seconds`); //output: 7.2s

//* Method 2:
// const t3 = performance.now(); //used to measure total execution time of code between two breakpoints
// let div = document.createElement('div');
// for(i = 1; i <= 100; i++) {
//     let newParagraph = document.createElement('p')
//     newParagraph.textContent = `Paragraph ${i}`
//     div.appendChild(newParagraph)
// }
// document.body.appendChild(div)
// const t4 = performance.now();
// console.log(`Time taken by method 2: ${(t4-t3)} seconds`); //output: 2.8s

/* 
//$ To understand the performance difference among the above two methods, we need to know the process of browser rendering. The browser rendering process can be divided into several steps
//* 1) Parsing HTML and Style Calculation: 
The browser parses HTML into DOM, and parses CSS into CSSOM, and merges DOM and CSSOM into render tree.
//* 2) Layout:
The render tree has the structure of DOM and the style of each node, but this is not enough to display the page. The browser also needs to calculate the size and position of each node on the screen. This process is called layout and this process produces a layout tree.
//* 3) Paint: 
Having DOM, style and layout tree is still not enough to display the page, the browser still needs to determine the order of element painting. You can imagine this process as a painting process annotation (paint record), such as:
-> First, draw a background
-> Then draw text at (x,y,w,h)
-> Then draw a rectangle
//* 4) Compositing:
After the first three steps, the browser has obtained the information needed to render the page, but in order to improve the overall rendering efficiency, the browser will composite the information through compositing and render it to the screen. Compositing is a technique of dividing the page into layers (layers), and this technique will be executed on a separate thread called compositor thread. After this process is completed, a layer tree will be generated, and finally rendered to the screen.

//* Reflow and Repaint: After understanding the browser rendering process, now let's understand the concept of reflow and repaint:
Reflow and Repaint refer to the layout and paint steps of the rendering process. When we do something to change the layout or style, Reflow or Repaint will be triggered.

//? When does Reflow happen?
Reflow is a very important factor that affects browser performance, because it may cause the entire or part of the page layout to be updated, and it may trigger the entire page Reflow because of a change in the size of a node. For example: change width, height, font-size and so on

//? When does Repaint happen?
When an element on the page needs to change color or other properties that do not affect the layout, the browser will perform Repaint. Unlike Reflow, Repaint does not affect the layout of the page, but it will also affect the performance of the page. For example: change outline, visibility, color, background-color and so on.
*/

//? Why method 1 is slower than method 2?
//It is becuase we are updating the DOM in every iteration by adding a new paragraph to the page and hence 100 reflows happened. On the other hand, in the method 2, we are adding new paragraph to a div created but not added to DOM, and after adding a 100 new paragraphs to the div, we updates the DOM by adding a div element to the the page. Here only one reflow is happen and hence it is faster.

//* Recommended method -> Document Fragment:
// A Document Fragment is a lightweight and efficient way to hold multiple DOM elements or nodes in memory without adding them directly to the main DOM tree. It acts as a container to group elements before appending them to the document, reducing the number of operations that manipulate the live DOM.

//? Why this is useful?
//It allows you to create and manipulate multiple elements “off-screen” without causing multiple reflows or repaints in the browser. Also when adding multiple elements to the DOM individually, the browser recalculates layout and repaints the screen for each insertion. Document Fragments reduce this overhead by enabling batch insertions.

const t5 = performance.now();
// Creating a Document Fragment
const fragment = document.createDocumentFragment();
// Creating and adding elements to the fragment
const element1 = document.createElement('div');
for (let i = 0; i < 100; i++) {
	let newParagraph = document.createElement('p');
	newParagraph.textContent = `This is paragraph ${i + 1}`;
	fragment.appendChild(newParagraph); // no reflow and repaint
}
document.body.appendChild(fragment); // 1 reflow and repaint
const t6 = performance.now();
console.log(`Time taken by method 3: ${t6 - t5} seconds`); //output: 1.6s
