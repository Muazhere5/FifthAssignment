Question.1 : What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer :

getElementById: selects one element by ID.

getElementsByClassName: selects all elements with a class (HTMLCollection).

querySelector: selects the first match (CSS selector).

querySelectorAll: selects all matches (NodeList).



Question.2 : How do you create and insert a new element into the DOM?

Answer :

Create: const el = document.createElement("div");

Add content: el.textContent = "Hello";

Insert: document.body.appendChild(el);





Question.3 : What is Event Bubbling and how does it work?

Answer :
Event bubbling means an event starts at the target element and bubbles up to its parent elements in the DOM tree.




Question.4 : What is Event Delegation in JavaScript? Why is it useful?

Answer :
Event delegation uses event bubbling: attach one listener to a parent instead of many children. It saves memory and works for dynamic elements.

Question.5 : What is the difference between preventDefault() and stopPropagation() methods?

Answer :

preventDefault() → stops the default browser action.

stopPropagation() → stops the event from bubbling up the DOM.