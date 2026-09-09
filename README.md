# React
React Note:

1.What is React?

React (React.js) is a JavaScript library used to build user interfaces (UI), especially for web applications.

It was created by Facebook (now Meta) and is mainly used to build dynamic and interactive websites.

=>React mainly focuses on the UI layer.

2.Differences between React and Other Frame Works?
Ans:1.React is a JavaScript library. (js)
    2.Angular is a complete framework. (Using TypeScript it is an advanced of js)
    3.Vue is between React and Angular in terms of approach.

In Short Terms:
React = flexible + component-based + JavaScript ecosystem
Angular = complete + structured + TypeScript-focused
Vue = simple + flexible + framework features

3.Why it is call as single page application?
It is called a Single Page Application (SPA) because the browser loads the main webpage once, and after that React changes the content on the screen without completely reloading the page.

4.List of single and multiple page applications?
single page application are: 
-- > React(js), Angular(ts).
Multiple page application are: 
--> ASP.NET Core MVC(.net /dot net){C#}, Django (Python),PHP, Spring MVC(Java).

5.What is a Framework?

A framework is a pre-built structure and set of tools that helps developers build applications faster and in an organized way

Framework
   ↓
Provides structure
   ↓
Provides tools
   ↓
Provides rules/patterns
   ↓
You build your application

6.What is a Library?

A library is a collection of pre-written code that developers can use to perform specific tasks instead of writing everything from scratch.


React installation command:

1.npx create-react-app my-app  (npx = Node Package eXecute)

It is a command that comes with npm (Node Package Manager).

It allows you to execute a package/command without permanently installing that package globally.

2. create-react-app

This is the Create React App tool.

It creates the basic structure required for a React application.

3. my-app

This is the name of your React project.

npm start ( it is an command to start the application)

starts the React development server.

react terminal commands:
1.npx create-react-app projectname or appname
yes
2.npm install (incase if itis needed)
3.npm start
or 
cd projectname or appname
npm start
yes

What is BrowserRouter?
BrowserRouter is a component from React Router that allows your React application to have different URLs/pages and navigate between them without reloading the entire webpage.
import { BrowserRouter } from "react-router-dom";
<BrowserRouter></BrowserRouter>

what is Routes?
Routes is a component from React Router that acts like a container for all your Route definitions.
import { Routes, Route } from "react-router-dom";
<Routes></Routes>

what is Route?
A Route defines which component should be displayed for a particular URL.
Route connects a URL (path) with a React component (element).

What ia import?
import is a JavaScript keyword used to bring code from another file or package into your current file.
import Header from "./Header";

What is export?
export is a JavaScript keyword used to make code from one file available to other files.
export default Header;


