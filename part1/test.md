## React interview questions

1. What is state and props in reactjs?
   state in genral speaking is the data that stored in each react component 
   props it used to receive the data from parent(outside) component

2. What is high order component? How do you use it?
    To be precisely, higher order component is the function that returns a component, this logic behind this function is pure and easy, it pretty much like a abstraction (class),if each component need to add more new function such as getting data, console.log  those kind of code that need be repeated multiple times, in this cases we can write a higher order component for it, is like an extension  
    
3. What is context? What are the benefits of it?
    context is used to manage global data, similar to redux

4. How to assign and change the value of state in a component?
   use Hook which is useState 

5. Could you explain the life-cycle of a react component?
    during the initialization it will grigger constructor() fucntion then set up state and props, in the mounting state will trigger the first componenwillmount() is performed automatically in the component is about to be mounted to the page of time, before the mount, will be preform for the first time. After that, the render function will be triggered, the page is rendered for the first time when it is mounted. Finally, it will trigger compinentiDidiMount(), after the assembly is mounted to the page is automatically executed after the mount.

6. What is fragment in react?
   fragment allow to group sub tage without adding additional nodes like DOM

7. What is ref in react?
   it store the tag ,we can using ref to obtian the value of the tag


8. What is container component? What is presentational component?
   container component:After we receive the data we need to do some thing about the data(Logical),so we store the data and logical inside the container component in order to reduce the coupling of components

   presentational component: it only renders HTML and no interact with logical 


9. How to pass a function to a component?
   we can import form the other file that export fcuntion, or we can use write the function inside the component,if using arrow function when we no need to re-bind the pointer. if the function exist in the parent, we can use props propertise to pass it to the children component



10. What is portal?
     if we want to render a child component of the parent component to other boxes in the webpage we can use protal

11. How to share state between parent component and child component? How to share state between sibling components?
    we can use redux, first create a store and reducer then import provider from react-redux in root file and wrap up all the component that need to access the data end up using connect for each component and create mapstate for it. the second way is using Hook, first using react.creatcontext , then use provider warp up the sibling compoennts, if any sibling components need to access the data it needs to hand up(useContext(xxx)) 
