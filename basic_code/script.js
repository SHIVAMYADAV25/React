// React.createElement creates a VIRTUAL DOM object (not real HTML)
// This represents: <h1>hello from my side</h1>
let h1 = React.createElement(
  "h1",          // type of element (HTML tag)
  null,          // props (null because no attributes like class, id, etc.)
  "hello from my side" // children (text content)
);

// This represents: <h2>this is h2</h2>
let h2 = React.createElement(
  "h2",
  null,
  "this is h2"
);

// This creates a parent div and puts h1 and h2 INSIDE it
// Equivalent to:
// <div>
//   <h1>hello from my side</h1>
//   <h2>this is h2</h2>
// </div>

// doing this because we cannot send two element in render() function
let div = React.createElement(
  "div",   // parent element
  null,    // no props
  h1,      // first child
  h2       // second child
);

// Select the REAL DOM node from index.html
// Example: <div id="container"></div>
let container = document.querySelector("#container");

// ReactDOM.createRoot connects React's virtual DOM system
// to the real browser DOM (this is React 18 standard)
let root = ReactDOM.createRoot(container);

// React compares the virtual DOM (div)
// with the real DOM and updates ONLY what is needed
// This is where rendering actually happens
root.render(div);
