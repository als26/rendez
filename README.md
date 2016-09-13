#**Rendez**

##**Basic Breakdown of What's Inside**##

- **Node.js** : The "engine" of the application. It's JavaScript on the server side and has an awesome package manager (npm). That's all I can say about it in a basic breakdown. You want something more in-depth go somewhere else.
- **Express.js** : A web application framework built for Node.js. It has everything implied with a web application framework (render files, what to do when someone hits you with a HTTP verb etc.).

-  **Socket.io** : A framework that deals with web sockets. What are web sockets? In simple terms it allows a client to maintain a persistent channel of communication with the server. Ideal for chat applications and probably this app. Can write a simple breakdown of how it work if requested.

-  **React** : A front-end framework that does really cool things. It acts as the view layer of an application and determines the state of components seen by the user and decides what needs to be rendered or updated. One of the ways React figures out what to change/update is through the use of a virtual DOM. It compares the state of the current DOM to that of the virtual one and looks for changes and reacts accordingly. Kind of like how those spot the difference games work. I don't know if any of that is actually how it works I'm just guessing. At the time of writing this I can't say too much else since I am still learning it.

-   **Webpack** : This is a packaging system. When working on a project you will have a ton of files (.js, .css, .jade, .coffee etc (and no etc is not a file type... atleast not yet this stuff keeps changing so quickly I wouldn't be surprised if there was .etc file extension)) Webpack bundles all these things together into a neat package for the browser to deal with. When you are setting up the webpack.config.js file you tell it what the entry point is (i.e the file that has the stuff you want to bundle) and the output file (in most cases you just tell it to make a bundle.js file). There are other aspects to it like what kind of loaders you want to use and presets. I don't know what those are, all I can say is if you are on Stackoverflow looking up an error and you see something with those taglines in someone's code maybe try using what they're using. Webpack also has features like watching for file changes to restart the server (similar to nodemon). There are probably some more features but I haven't stumbled upon them yet.
-   **Babel** : Kind of a stupid name but whatever. Basically Javascript has come a long way and is constantly changing (very quickly I might add). When I say changing I mean in the things it can do and the way its written. When you hear/read about things like ES5, ES6, ES7, es2015, es2016, ECMAScript blah blah blah that's their way of confusing you and f-ing with your mind. Basically these are implementations of Javascript. Quick breakown of the naming convention :

  - ECMA : The people overseen by TC39 committee that deals with this new fangled JavaScript stuff.
  - JavaScript: It's JavaScript.
  - ES5 : Short for ECMAScript5 (see how that nameing convention works?). Fairlt common among modern browsers.
  - ES6 : Short for ECMAScript6 (same naming convention as before) but wait its also refered to as ES2015. ES6 = ES2015 just pick one. Not fully stantard so only partial implementation in modern browsers.
  -  ECMAScript2016 : If naming convention holds true then its also called ES7. I have nothing else to say about it.
  -  JSX : It looks like a mix of Javascript and XML. It's used by React. Not much else I can say about it since im still learning it.

  So what do they have to do with Babel? Basically with ES6 and subsequent ES7 they are too new and shiny for modern browsers. They are "from the future" as in, they work real nice and are fully supported ... in the future. But we are impatient and want to use them now so we use something like Babel to convert the syntax into something modern browsers can understand. In essence it acts as a translator.

  I think that's it. There is probably going to be some more stuff that gets added on but we'll deal with it when we get to it.



  --Aditya Surabi




`cd` into the project directory.

run

`npm install` if you don't already have the modules.

`npm start` This will run `webpack` and start the server.

head over to `localhost:3000` in your browser to check it out.

#TODO

  - Recreate the join room and create room buttons as React component




