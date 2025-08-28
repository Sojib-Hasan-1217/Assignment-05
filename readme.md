Q1- What is the difference between getElementById, getElementsByClassName, andquerySelector / querySelectorAll?

Answer- To The Question-1
getelementById-
 We use to get one single element by its Id name .

getelementByClassName-
 To get multiple element with same className we use this its return us a htmlcollection;

querySelector-
 we search by selector like(id,class,tagname,) in this method to get element from dom and return only the first element which matched first, if no match found it return null;

querySelectorAll-
using this method we get all the selector that matched the selector that we search for and it return nodeList its like array but actually not array;

Q2-How do you create and insert a new element into the DOM?

Answer- to the question -2
first we creat an element like - document.createElement('tagName');
than we set innertext in this tagName - tagName.innerText='This is first tag';
after that we append this in body or div of DOM - body.appendChild(tagName);
this is how we create and insert a new element into the DOM

Q3-What is Event Bubbling and how does it work?

Answer to the question-3
Event Bubbling: when we set a event handler (click) on any element of DOM it not stop on element, rather it go on the parent element than grandparent element ;
like-(p>div>body>html>document)

if we set event handler in every stage like paragraph tag , div, section 
when we click in paragraph tag it will also go to div tag and section and trigger them also;


Q4-What is Event Delegation in JavaScript? Why is it useful?

Answer - Event Delegation is a method where we set eventListener on parent element and it work in the child element ;
It is usefull because it easy to read code and short and clean code with improve perfomance
and  we  can add more child element in future  but not the code or eventListner to set that why it is so usefull 

Q5-What is the difference between preventDefault() and stopPropagation() methods?

Answer - to stop website loading when we trigger event in a button we use preventDefault(),
and to stop event Bubbling to parent element
we use stopPropagation() 

