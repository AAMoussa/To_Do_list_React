# AHMED's DOCUMENTATION FOR THIS TO-DO-LIST webapp Using React.

1- Created a react project using  
    npx create-react-app todo-list
2- To start the development server run this code: 
  cd todo-list
  npm start
3- start with the src/App.js and clear unwanted fragments
4- delete the logo.svg and its import statement & app.test.js file.
5- clear App.css current style rules.
6- start with the App.js and build all the needed components.
	_ start by adding the page title "To Do List".
	_ unordered list to present the list items.
	_ Input component to add a new task.
	_ A button component for adding items.	
7- To render the added items in the Unordered list, we must 
	use the useState with an initial state as an
	empty array to manage the to-do-items .
	not to forget to import useState from react.
8- so, within the <ul> component iterate through the todos array with map()
	then the arrow function will  return the item in within the <ul> as an <li>.
9- Now its tifme to work on the logic for the input element to add the new item to the todo array.
	 to do that I imported and used the useRef to reference the input element.
10- Note that the useRef will allow us to directly reference any html element.
11- To make the Add button functional, i added a clickHandler function expression and name it
	handleAddTodo; make sure to add the onClick attribute to the button component.
12- Within the handleAddTodo, I get the value of the current element which is the input
	and pass it to a text variable.
13- Now, I have to define the setTodos to add the items in the todos array. This will take place within
	the handleAddTodo. This will be accomplished by the spread operator to copy the last state to the 
	new one with a newly added item.
14- Now, I had a problem that the input value stays in after adding a new item successfuly.
	To work around that I make use of the useRef again but now with an empty string value.
=====================================================================================
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
