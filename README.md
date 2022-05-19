# _Jolly Cooperation - Your Go To For Multiplayer Needs_

#### By Zachary Green

#### _This application was created using React.js and Google Firebase. The application is an Internet Forum for video game enthusiasts who need to find players to do multiplayer with. This project started out as a proposal for a capstone project for Epicodus programming school, but it grew into something more of a passion project for me. There are many video games on the market that offer online play for their users, but not all games have good match making systems in place to allow users to actually find and meet new players to play games. This application was meant to be a solution to that problem._

## Technologies Used
* `HTML`
* `CSS`
* `Bootstrap`
* `JavaScript`
* `NODE.js`
* `React`
* `React-Router`
* `Firebase/Firestore`

## Description

_The user has the ability to view a Message Board as the home page where they can choose from different sections. There is a section for multiplayer as well as sections for General Discussion, Tecnical Support and even Guides. The user signs into the application via google and can then create new posts to different sections of the website. (at this time only the Multiplayer section is up) Users can then find posts on the Message List and make Replies to other users.(this feature is still on construction)_

## Diagram

* TBA

## Setup/Installation Requirements

* Visit https://github.com/Ultra-Zactimus/React-Survey-Redux-Firebase
* Clone this repository to your desktop.
* Navigate to the top level of the directory in your terminal.
* Run "$ `npm install`"
* Run "$ `npm start run`" to open a liveserver in the browser.

* Please refer to the `Available Scripts` section of this README for additonal information.

_{You do not need to add the `$` to the terminal commands. GitBash comes with that as a prefix on command line.}_

## Known Bugs

* The applications Reply feature is not working as intended. The goal is to have a sub collection created within a specific message through that message's id that will store the replies for that message, but currently I have not been able to get the examples in the official documentation working in this application.
* Ther application shows the user logged out for a brief moment on refresh or page transitions which should not be happening. The user is still signed in because their logged in status is being stored into local storage.

## Stretch Goals

* This application is very much so, a work in progress there are many features that I still want to add to this application and some can still be seen on the Message Board.

* I wanted the Message Board to go beyond just people looking for Multiplayer opportunities. I want this forum to grow into a place where users can have a community to discuss gaming and even run polls. The sections exist on the main page, but their functionality has not been implemented. These features are something I am looking to try to implement in the coming months in preparation of making this a hosted project.

* My original intent was to have a User Profile page where users could create a custom avatar, usrename and About Me section. I want there to be a drop down menu on the Navigation Bar that would allow users to view their profile and even receive notifications when users have posted replies to content they have created. Using google authorization made this more challenging and I decided to save this feature as stretch goal.

* Another feature I wanted to be able to implement would be for users to upload their own content to the page, whether that be images, gifs, custom youtube videos or even mp4 of their gameplay. Google Firebase offers a feature to upload content like that to Firestore and it is something I very much want to have present on this application. I just did not have time to implement this feature due to trying to get the projects MVP completed within the time frame of the presentation deadline.

* There is a section I created for Walkthroughs which I had intended to be a place where users can actually create their own guides to games. I wanted to allow the user a lot of freedom in customizing this to their liking. This might by far be the most challenging part of the project, but I feel it would bring a really great feature to this application and make it stand out.

## License

MIT

Copyright (c) 2022 Zachary Green  


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
