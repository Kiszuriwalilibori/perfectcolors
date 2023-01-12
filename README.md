# Colors

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## Objective of this project

-   Demonstrate knowledge of React, Redux, Router
-   Be a a playground for exercising a.m. technologies

### Features

-   initialy, fetches a list of colors from remote location
-   displays the colors with pagination
-   permits filtering one of colors
-   makes available full color data in modal
-   permits navigation both by pressing buttons and directly entering page number

### Tech

The following tools and resources has been used while developing Google Books

-   [ReactJS](https://reactjs.org/) - HTML enhanced for web apps!
-   [Visual Studio Code](https://code.visualstudio.com/) - awesome web-based text editor
-   [Webpack](https://webpack.js.org/) - bundles assets
-   [Redux 4.0](https://redux.js.org/) - A Predictable State Container for JS Apps
-   [Material UI](https://material-ui.com/) - React components for faster and easier web development
-   [React Router](https://courses.reacttraining.com/p/react-router-5) - Declarative routing for React

### Installation

-   Not required. Just open index.html in the browser
-   For local use: fetch/copy the content of repo <https://github.com/Kiszuriwalilibori/colors> master branch
-   run npm install (here and below - assume youse of npm, not checked with yarn )

-   after installation is complete run npm start

### Browser limitations

-   No suppport provided for Opera Mini nor IE

### Version

#### 0.1.0

initial

### 0.1.1

added helpers for few simple operations, many variables renamed, readme initiated, ogg data and version added to index.html, gh-pages installed

### 0.1.2

files in helpers dir rearranged

### Steps to reproduce in local directory

1. Create local directory
   Now, open the directory with VSCcode and open new terminal, or being in this directory type the folllowing commands with editor of choice:
2. git init
3. git remote add origin https://github.com/Kiszuriwalilibori/perfectcolors.git
4. git pull origin master
5. npm install

### Explanatory Notes

1. Hash Router is because of GH Pages way of rendering

2. Navigation in general, one can say it is too nested. Yeah, it might be simplier but wanted to make full use of Layout/Outlet features.

3. Navigation might look cumbersome but tried to cover most cases of user's input in browser navbar

4. Styling: While generally do not like MUI here took opportunity to use exclusively MUI (and what base React out-of-box styles are), just to gain some experience. Besides, styling is rather minimalistic by definition (or my idea of design);

5. unknown type in filterSlice: i would rather avoid 0 whichi reasonably good Id; making exceptions for 0 would IMO seem hacky and a kind of magic number, then I took null though it means more code and assertions

6. I decided to add fixed and not parameterised with :id routes in order to not have any problems with non existing - but typable -paths.

7. Both reducers and slices: pereferred are slices, however in fetch function one must use action names which should be made up to uppercase pattern rather.
