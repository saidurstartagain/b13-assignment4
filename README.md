
## Answers to Questions
  
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


Answer: The main differences lie in their flexibility (selector types), return values (single element vs. collection), and whether the returned collection is "live" or "static". querySelector methods are more flexible, while getElementById and getElementsByClassName are more specific and potentially faster.


### 2. How do you create and insert a new element into the DOM?

Answer: To create and insert a new element into the DOM, you first create the element using document.createElement() and then insert it into an existing parent element using methods like appendChild(), append(), prepend(), insertBefore(), before(), or after().



### 3. What is Event Bubbling? And how does it work?

Event bubbling is a DOM event propagation mechanism in JavaScript where an event triggered on a child element triggers handlers on its parent elements, moving upward through the DOM tree. It acts like a bubble rising from the innermost element to the document root, allowing efficient, centralized event management.


### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a design pattern in JavaScript where a single event listener is attached to a parent element to manage events for all its descendant elements, rather than attaching a separate listener to each child [1, 2]. 


### 5. What is the difference between preventDefault() and stopPropagation() methods?


event.preventDefault() stops the browser's default action for a specific event (e.g., a link navigating to a URL), while event.stopPropagation() stops the event from propagating (bubbling up) to parent elements in the DOM tree. 
