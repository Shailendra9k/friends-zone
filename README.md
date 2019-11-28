This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Friends-Zone Intro

This project is created to keep records of friends with basic information of friends with their photo name and job details.

### Create app

Here, going to use `create-react-app  friends-list `to create app inorder to create project and get all the libraries that we want to go along with project. 

This will be autmotically done when this commands completed.

Then I pushed this with in `GitHub` so for its deployment and more.
### What components?

As per the need of the project we are going to create three components that fulfil our project goal.
          `App component as our main root component
          PersonList to create list of friends
          Person component as our most child component`
So that shows we are going to have nested componets like upper to App, PersonList and finally Person.

We'll be doing most of our work in `Person` component.

### Person component

We'll start working from this component.
So, we need person name, image and occupation here. 

For getting name and image we can use source `https://randomuser.me/documentation

"https://randomuser.me/api/portraits/thumb/men/22.jpg"`.
Here, we can find random user and just changing number in the list we can have as many different person images as we want also we can change their gender manually.

Then we'll return `img and h4 tag` for person image, name and occupation.

### PersonList component
Here, we will create a list of people that we want to return.
For that we create an arrary with three different peoperties and their corresponding values.

As per our need it will be something like `[img: , name: '', job: '']`.
Then we will pass this array as value to the props created for person component.

### Stylying section
In this section, we perform various styling to our content.

We start styling first for whole content where we set `margin, padding, and box-sizing`.

Then next we do styling for whole nesting for `class person`.
Now styling to `img` followed by `h4` where we style our name and job title.

Also, we will implement `hoover` so when we put our cursor over it we can see effect on selected image.



### Default Scripts 

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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
