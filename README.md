# Substrate Dapp (Frontend)

# Project setup prerequisites

You should have the following installed on your local machine

- Node.js v17 or higher
- yarn v1.22.19 or higher
- A Code Editor (e.g.: VS Code)
- A Web Browser
- A .env file

# .env file

## create a .env file on the root of the project and paste the following env vars:.

```
BROWSER=none
EXTEND_ESLINT=true
FAST_REFRESH=true
VITE_APP_API_ENDPOINT='https://api-devnet-xnames.bictory.art/xnames/'
VITE_APP_IS_PRODUCTION=''
VITE_APP_LINKEDIN_CLIENT_ID=773qvtihr48it3
VITE_APP_ENVIRONMENT=devnet
```

#

# How to start the project on your local machine

- Clone the project to your local machine
- Switch to the project's directory
- Install all dependencies with the command

```bash
yarn
```

- Run the development server with the command

```bash
yarn start:devnet
```

Open [http://localhost:3000](http://localhost:3000) on your browser to see the result.

#

# E2E testing (with cypress)

## Getting started

First, build the project with

```bash
yarn build:devnet
```

Then start the build preview with

```bash
yarn start:prod
```

Now, start cypress with

```bash
yarn cypress
```

A window will open. Follow the instructions on there to get testing.

#

# Unit Testing (with vitest)

- Run

```bash
yarn test
```

You will see the results on the terminal.

### Getting started with unit test coverage report

- Run

```bash
yarn test:coverage
```

To generate unit test coverage report.

### Viewing coverage report on your browser

- First, generate the coverage report, which would create a coverage folder at the root of the project
- Then open the coverage folder, locate the index.html file in the root of the folder, right click and select 'Copy Path'. Now paste the copied path on your browser.
- Or visit,

```bash
[path-to-project...]/mx-xnames-dapp/coverage/index.html
```

#

# Deployment steps

- First, install depencies with the command

```bash
yarn
```

- Then build the Dapp with

```bash
yarn build:devnet
```

- Then serve with

```bash
yarn start:prod
```

Note: if you are on your local machine, open [http://localhost:3000](http://localhost:3000) on your browser to see the result.

#

# Tech Stack

- React
- ReactRouter
- Redux
- Redux Toolkit
- Reselect
- Redux-Saga
- Styled Components
- Typescript
- React-i18next
- Material-UI

**Linting**

- ESLintPrettierStylelint

## **Code/Folder Structure**

    /src

all the codes are in the `/src` folder
`/src/index.tsx` is the starting point of our app

    /src/app

this is where the core of the application lives and grow.
`/src/app/index.tsx` is where routes and all necessary imports, and providers are defined. The rest of the application does not contain any provider.
`/src/app` contains 2 main element types of the app

1.  components -
    contains all the global components (they are in the root of `/src/app/components`) and common components shared with some containers

2.  containers
    contains major parts, mainly pages. Each page of the app is isolated in a container. generators are used to generate seamless structure for all pages(containers)

# Generators

    yarn generate

Is used to auto-generate boilerplate code for common parts of application: `containers` and `components`. You can also run

    yarn generate <part>

to skip the first selection

    (e.g., yarn generate component`).

#

# Typescript

`yarn tsc`

Checks for TypeScript errors.

#

# Chrome Extensions

For a better debugging and development experience we suggest [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en). Redux is configured with this extension in mind so that you can debug and monitor your state changes very easily.

#

// I don't think we need the below doc. @mohsen

# Building Blocks

In this section, we will explain the **building blocks** of the app in detail.

First we have to look at what is happening when react starts its life with `index.tsx` file.

# `src/index.tsx`:

It is one of the most important files of the app. It contains all the global setup to make sure our app runs smoothly. Let's break its contents down:

- `react-app-polyfill` is imported to enable compatibility with many browsers and cool stuff like generator functions, Promises, etc.
- A Redux `store` is instantiated.
- `ReactDOM.render()` not only renders the root React component, called `<App />`, of your application, but it renders it with `<Provider />`.
- Hot module replacement via [Webpack HMR](https://webpack.js.org/guides/hot-module-replacement/) makes the i18n translations hot re-loadable.
- i18next internationalization support setup.
- `<Provider />` connects your app with the Redux `store`.

Again, `src/index.tsx` handles all the bootstrapping and setup of the features we are using in the app. Now, let's review a summary of the **building blocks**.

# Redux

Redux is likely to play a significant role in our application. If you're new to Redux, we'd strongly suggest that you complete this checklist and then come back:

- Understand the motivation behind Redux.
- Understand the three principles of Redux.
- Implement Redux in a small React app of yours.

The Redux `store` is the heart of our application. Check out `src/store/configureStore.ts` to see how we have configured the store.

The `createStore()` factory creates the Redux store and accepts three parameters.

1.  **Root reducer:** A master reducer combining all your reducers.
2.  **Initial state:** The initial state of your app as determined by your reducers.
3.  **Middleware/enhancers:** Middlewares are third party libraries which intercept each Redux action dispatched to the Redux store and then... do stuff. For example, if we install the [`redux-logger`](https://github.com/evgenyrodionov/redux-logger) middleware, it will listen to all the actions being dispatched to the store and print the previous and next state in the browser console. It's helpful to track what happens in our app.

In our application, we are using a single middleware.

1.  **`redux-saga`\*\***:\*\* Used for managing _side-effects_ such as dispatching actions asynchronously.

# Redux-Toolkit

> The official, opinionated, batteries-included toolset for efficient Redux development.

This is the latest and best way of using Redux. It handles lots of the things you would need to do to get Redux working.

You are needed to read [documentation](https://redux-toolkit.js.org) at this point. This Skeleton uses Redux heavily, so you must understand it.

# Reselect

Reselect is a library used for slicing your Redux state and providing only the relevant sub-tree to a React component. It has three key features:

1.  Computational power.

2.  Memoization.
3.  Composability.

Imagine an application that shows a list of users. Its Redux state tree stores an array of usernames with signatures:

`{ id: number, username: string, gender: string, age: number }`.

This is how the three features of reselect help.

- **Computation:** While performing a search operation, reselect will filter the original array and return only matching usernames. Redux state does not have to store a separate array of filtered usernames.
- **Memoization:** A selector will not compute a new result unless one of its arguments change. That means, if you are repeating the same search once again, reselect will not filter the array over and over. It will just return the previously computed and, subsequently, cached result. Reselect compares the old and the new arguments and then decides whether to compute again or return the cached result.
- **Composability:** You can combine multiple selectors. For example, one selector can filter usernames according to a search key, and another selector can filter the already filtered array according to gender. One more selector can further filter according to age. You combine these selectors by using `createSelector()`.
  Please read more on this tool here [reselect](https://codebrahma.com/reselect-tutorial-optimizing-react-redux-application-development-with-reselect/)

# Redux-Saga

Imagine that our application is fetching data in JSON format from a back-end. For every API call, ideally, you should define at least three kinds of [action creators](http://redux.js.org/docs/basics/Actions.html):

1.  `API_REQUEST`: Upon dispatching this, your application should show a spinner to let the user know that something's happening.
2.  `API_SUCCESS`: Upon dispatching this, your application should show the data to the user.
3.  `API_FAILURE`: Upon dispatching this, your application should show an error message to the user.

And this is only for _**one**_ API call. our application could be making tens of API calls. How do we manage all of them effectively? It essentially boils down to controlling the flow of our application. What if there was a background process that handled multiple actions simultaneously and communicated with the Redux store and React components at the same time? Here is where `redux-saga` enters the picture.

For a mental model, consider a saga like a separate thread in your application that's solely responsible for side-effects. Then `redux-saga` is a Redux middleware, which means this thread can be started, paused, and canceled from the main application with standard Redux actions. It has access to the full Redux application state, and it can dispatch Redux actions as well.

If you have read the redux-toolkit documentation you are familiar with the `slice` concept now. Here, we are taking it another step further by enriching it with `reselect` and `redux-saga`.

Slice manages, encapsulates, and operates a `portion` of your application's data. For example, if you have a page that displays a user list, then you can have a slice called 'UsersPageSlice' that contains all the users in its state, also the functions to read it from the store and the functions to update the users in the list. So, in short, a slice is a redux-toolkit slice also containing the relative `reselect` and `redux-saga` operations within its folder. After all, they are all related to managing the same portion of the data.

# Slice

A `slice` is independent of the UI component. It can contain any kind of logic and it can be located in any folder. To follow the `folder-by-feature` pattern it is recommended to keep your `slices` closer to your component using it. But, this doesn't mean that it only belongs to that component. You can import and use that slice in whichever component you want. (the auto generated `use"Container"Slice()` hook is for this goal )

# Redux Injectors

​[`redux-injectors`] library allows you to dynamically load reducers and sagas as needed, instead of loading them all upfront. This has some nice benefits, such as avoiding having to manage a big global list of reducers and sagas. It also facilitates more effective use of [code-splitting](https://webpack.js.org/guides/code-splitting/).

**Note:** Importing `redux-injectors` from `utils/redux-injectors` will add extra type-safety.

# Async Components

To load a component asynchronously, create a `Loadable` file by hand or via component generator with the 'Do you want to load resources asynchronously?' option activated.

This is the content of the file by default:

    import React from 'react';
    import { lazyLoad } from 'utils/loadable';

    export const HomePage = lazyLoad(
      () => import('./index'), module => module.HomePage,
      { fallback: <div>Loading...</div>, }// fallback acts like a loading component
     );

# Routing

#### Usage

To add a new route, simply import the `Route` component and use it standalone or inside the `Routes` component (all part of [RR5 API](https://reacttraining.com/react-router/web/api)):

    <Route exact path="/" component={HomePage} />

Top level routes are located in `src/app/index.tsx`.

If you want your route component (or any component for that matter) to be loaded asynchronously, use the component generator with 'Do you want to load resources asynchronously?' option activated.

## Child routes

For example, if you have a route called `about` at `/about`, and want to make a child route called `team` at `/about/our-team`, follow the example in `src/app/index.tsx` to create a `Routes` within the parent component. The `exact` property should also be removed from the `about` parent route.

    import { Routes, Route } from 'react-router-dom';
     export function AboutPage() {
      return ( <Routes> <Route exact path="/about/our-team" /> </Routes> );
     }

### Routing programmatically

You can use the [react-router hooks](https://reacttraining.com/react-router/web/api/Hooks) to change the route or get params, etc.

    import { useNavigate } from 'react-router-dom';
    import {AppPages} from 'containers/constants';

     function HomeButton() {
      let history = useNavigate();

       function handleClick() {

       navigate(AppPages.Home);
       }

        return (
        <button type="button" onClick={handleClick}> Go home </button>
         );
       }

# Styling (CSS)

This Skeleton uses [`styled-components`](https://github.com/styled-components/styled-components) for styling React components. `styled-components` allows you to write actual CSS inside your JavaScript, enabling you to use the [full power of CSS](https://github.com/styled-components/styled-components/blob/master/docs/css-we-support.md) without mapping between styles and components.

# Media queries

    import { media } from 'styles/media';

     const SomeDiv = styled.div`
      display: flex; ....

      ${media.md} {
        ...code goes here.
      }
    `;
