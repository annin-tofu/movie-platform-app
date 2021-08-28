This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# movie-platform-app

# preparation

## create an app

$ npx create-react-app movie-platform-app --template redux

## setup firebase

click the cog (setting)

click <>

and follow 5 steps.

then click config under SDK setup and configuration

copy and paste it to firebase.js folder

## for little clean-up

delete below 3 files in src folder
App.test.js
logo.svg
setupTexts.js

## setup firebase authentication

enable email auth as a sign-in method

# use TMDB for movie database

#

counterSlice.js
counterAPI.js
counterSlice.speed.spec.js

has all been moved to features folder from counter folder

# BEM naming convention

http://getbem.com/naming/

BEM stands for Block, Element, and Modifier. It's a CSS naming convention for writing cleaner and more readable CSS classes. BEM also aims to write independent CSS blocks in order to reuse them later in your project.

https://youtu.be/1TCw9wO1neA?t=3880

# effect for header styling in Nav.js

    Originally, the line was
    <div className= "nav nav__black">
    // changed as below to enables effect that styling "nav__black" will be disabled and will be transparent
    // it reads, Only render the "nav__black" class if the variable "show" is true
    <div className={`nav ${show && "nav__black"}`}>

# Little Trick for faster coding

h1.banner ==> <h1 className=“banner”></h1>
button.banner**button ==> <button className="banner**button"></button>

# in CSS, what is "rem" unit?

<!-- as in,
.banner__title {
font-size: 3rem;
font-weight: 800;
padding-bottom: 0.3rem
}
-->

https://www.sitepoint.com/understanding-and-using-rem-units-in-css/

/_ Pixel ( px ) is a commonly used CSS unit on websites. ... Element ( em ) and Root element ( rem ) are responsive units interpreted into equivalent px unit by the browser. They are relative units. Change in the value of the parent or root element affects the value of relative units. _/
/_ Equal to the computed value of font-size on the root element. When specified on the font-size property of the root element, the rem units refer to the property's initial value. This means that 1rem equals the font size of the html element (which for most browsers has a default value of 16px). _/

# Truncate function

// in case, "description" is way too long, it truncates
// https://www.coderrocketfuel.com/article/truncate-a-string-at-a-given-length-using-javascript
// Also, note that Truncates a string. Unless split is true, truncate will not split words up, and instead discard the word where the truncation occurred. This is different from Ellipsis function

// https://stackoverflow.com/questions/4700226/i-want-to-truncate-a-text-or-line-with-ellipsis-using-javascript
function truncate(string, n) {
return string?.length > n ? string.substr(0, n - 1) + "..." : string;
}

# Why use back-tick(`)

https://stackoverflow.com/questions/27678052/usage-of-the-backtick-character-in-javascript

This is a feature called template literals.

They were called "template strings" in prior editions of the ECMAScript 2015 specification.

Template literals are supported by Firefox 34, Chrome 41, and Edge 12 and above, but not by Internet Explorer.

Template literals can be used to represent multi-line strings and may use "interpolation" to insert variables

What is more important, they can contain not just a variable name, but any JavaScript expression:

# Implementing the API (Connect to TMDb)

https://youtu.be/1TCw9wO1neA?t=5403

to get the API Key, do the followings
-go to TMDb
-Then go to Settings
-then click API
(If you are here for the very first time, you might have to go through application submission process to get API Key. Just say the purpose for needing the API Key is for Personal use)
￼
-copy the API Key

> > > > back to JSCode

-create file called axios.js in src folder

//axios is good library for making request.
// promise-based library for when making request to a server across the internet.
import axios from 'axios'

02015651