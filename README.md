# theOdinProject-MemoryCard

[The Odin Project: Javascript] - Project: Memory Card

# Summary

-   This project was used as an introduction to React Hook and Lifecycle methods. Since I had some exposure to React, I pushed myself:
    -   To practice creating Reusable components.
    -   In using semantic tags since I wanted to start creating good accessibility habits
    -   Use Gatsby to get familiar with this framework
    -   Continue using Sass

# Lessons Learned

1. Used Dribbel to get inspiration for the fonts and design of the web app. [Inspiration from Switch](https://dribbble.com/shots/14730009-Switch/attachments/6431406?mode=media). This lead me to creating a style guide.

    - ## 📗 Fonts used

        - Segoe UI

    - ## 🎨 Color Reference

        | Color           | Hex                                                                |
        | --------------- | ------------------------------------------------------------------ |
        | Turquoise       | ![#2cd1c7](https://via.placeholder.com/10/2cd1c7?text=+) `#2cd1c7` |
        | Black           | ![#111029](https://via.placeholder.com/10/111029?text=+) `#111029` |
        | Yellow          | ![#d1da0e](https://via.placeholder.com/10/d1da0e?text=+) `#d1da0e` |
        | Turquoise Hover | ![#2fc2b9](https://via.placeholder.com/10/2fc2b9?text=+) `#2fc2b9` |

1. We also practice a lot with using reusable components. I learned how to use new Map(). **The Map object holds key-value pairs and remembers the original insertion order of the keys. THis was really good as it allowed me to create the component for Form reusable**

1. Learned how to use useContext! A big challenge I encountered was that my display components was not getting the most updated props because the componeont was not getting rerendered again. The component was just used to display data and everytime the user added a new work experience, education or skill it will generate a new ResumeRow or ResumeSkill component. This component had no way of getting the most updated props since it was only used for display.
    1. I learned how useful useContext is since it was solution for my problem!
    2. Resource [https://medium.com/@guptagaruda/react-hooks-understanding-component-re-renders-9708ddee9928#3e84](https://medium.com/@guptagaruda/react-hooks-understanding-component-re-renders-9708ddee9928#3e84)

You can find more on the project here: [The Odin Project - CV Application](https://www.theodinproject.com/courses/javascript/lessons/cv-application)

5. Learnd the following terms!

    - **Manifest.json:** which provides info about a web app in a json text file necessary for the web app to be downloaded and be presented to the user similarity to a native app
        - I used when a user adds a web app to their home screen using Chrome and Firefox
    - **Package.json:** List the project depends on and which versions of a package you project can use
        - react-scripts is a set of scripts from the create-react-app
        - It sets up the development environment and starts a server as well as hot module reloading
    - **Yarn.lock:** This is really important! Yarn needs more information than the dependencind you configure in your package.json.
        - Yarn needs to store exactly which versions of each dependency were installed
        - To do this Yarn uses a yarn.lock file in the root of your project
    - **Hot Module Replacement:** Exchanges, adds, or removes modules while an application is running without a full reload.
        - Retain application state which is lost during a full reload
        - Save valuable development time by only updating what has changed
        - Instantly update the browser when modifications are made to css/js
    - npm vs yarn
        - Yarn was created by Facebook since npm was giving them problems
        - Yarn installation is faster npm
        - Yarn is more secure than npm
        - Yarn install multiple packages at once
        - npm does one at a time
        - This all changed in npm version 5!
    - dev dependencies are only used in development environment
    - The code inside the React Return statement is JSX not html!

6. **Binding and This**

    - Arrow functions are exempt from this behavior because they use lexical this binding which automatically binds them to the scope they are defined in
    - **Lexical Scope**

        1. Every inner level can access its outer level. Example

        ```jsx
        void func() {
        	int x = 5;
        	void func2() {
        		printf('%d', x);
        	}
        }

        // Here it will print 5 since func2() will look for a an x, but it is not in the func2
        // So it looks outside its scoop to and finds the 5

        // In React
        class Foo extends React.Component {
        	handleClick(event) {
        		// code
        	}

        	render() {
        		return (
        			<button type='button' onClick={(event) => this.handleClick(event)}/>
        				Click Me
        			</button>
        		);
        	}
        }

        // In this example, it will look for handleClick and since it is an arrow function,
        // it will use lexical scope and find the handleClick inside the class
        ```

    3. When you do not bind

        1. It looses its implicitly bound context
        2. It falls back to the default which will be the global object

        Also

    ```jsx
    <button type='button' onClick={this.handleClick}/>
    	Click Me
    </button>
    ```

    1. Here since you did not bind it all! The context was lost after passing the handle as a callback

# Technologies:

-   React
-   React Bootstrap
-   Dribble
-   Sass
-   Surge.sh
