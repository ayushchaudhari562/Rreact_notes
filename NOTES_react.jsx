// ===================================================
// JSX (JavaScript XML)
// ===================================================

// JSX allows you to write HTML-like syntax in JavaScript
const element = <h1>Hello, World!</h1>;

// JSX with expressions (use curly braces)
const name = "Alice";
const greeting = <h1>Hello, {name}!</h1>;

// JSX with attributes
const link = <a href="https://example.com">Click here</a>;

// JSX with JavaScript expressions
const result = <div>{2 + 2}</div>; // Renders: <div>4</div>

// Multi-line JSX (wrap in parentheses)
const card = (
  <div className="card">
    <h2>Title</h2>
    <p>Description</p>
  </div>
);

/*
JSX is NOT HTML - it's syntactic sugar for React.createElement()
- Use className instead of class
- Use camelCase for attributes (onClick, onChange)
- Self-closing tags must have / (like <img />)
- All tags must be closed
*/

// ===================================================
// BABEL
// ===================================================

// Babel transpiles JSX to regular JavaScript

// JSX code:
const element = <h1>Hello</h1>;

// Gets converted by Babel to:
const element = React.createElement('h1', null, 'Hello');

// Complex JSX:
const app = (
  <div className="container">
    <h1>Title</h1>
  </div>
);

// Babel converts to:
const app = React.createElement(
  'div',
  { className: 'container' },
  React.createElement('h1', null, 'Title')
);

/*
Babel is a JavaScript compiler/transpiler
- Converts modern JS (ES6+) to older versions
- Converts JSX to React.createElement() calls
- Makes code compatible with all browsers
- Usually configured via webpack or create-react-app
*/

// ===================================================
// REACT COMPONENTS
// ===================================================

// 1. FUNCTIONAL COMPONENTS (Modern, Recommended)
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow function syntax
const Greeting = () => {
  return <h1>Welcome!</h1>;
};

// Implicit return (for simple components)
const SimpleButton = () => <button>Click me</button>;

// 2. CLASS COMPONENTS (Legacy, but still used)
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello from Class!</h1>;
  }
}

/*
FUNCTIONAL vs CLASS COMPONENTS:
- Functional: Simpler, use Hooks for state/lifecycle
- Class: Older approach, uses this.state and lifecycle methods
- Modern React prefers functional components
*/

// ===================================================
// PROPS (Properties)
// ===================================================

// Props are arguments passed to components (like function parameters)

// Parent component passing props
function App() {
  return (
    <div>
      <Welcome name="Alice" age={25} />
      <Welcome name="Bob" age={30} />
    </div>
  );
}

// Child component receiving props
function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

// Destructuring props (cleaner syntax)
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Props with default values
function Greeting({ name = "Guest", message = "Welcome" }) {
  return <h1>{message}, {name}!</h1>;
}

// Props can be any data type
function Profile(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <img src={props.imageUrl} alt="profile" />
      <button onClick={props.handleClick}>Click</button>
      {props.isActive && <span>Active</span>}
    </div>
  );
}

// Using the Profile component
<Profile 
  user={{ name: "Alice", email: "alice@email.com" }}
  imageUrl="photo.jpg"
  handleClick={() => console.log("Clicked")}
  isActive={true}
/>

/*
PROPS KEY CONCEPTS:
- Props are READ-ONLY (immutable)
- Passed from parent to child component
- Can pass any data type: strings, numbers, objects, arrays, functions
- props.children contains nested elements
- Use destructuring for cleaner code
*/

// ===================================================
// PROPS.CHILDREN
// ===================================================

// Special prop for nested content
function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

// Usage
<Card>
  <h2>Title</h2>
  <p>This is the content inside the card</p>
</Card>

// With destructuring
function Container({ children, title }) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

/*
props.children allows you to pass JSX as content between component tags
- Makes components more flexible and reusable
- Common pattern for wrapper/container components
*/

// ===================================================
// COMPLETE EXAMPLE
// ===================================================

// Reusable Button component with props
function Button({ text, color, onClick }) {
  return (
    <button 
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// Card component using props.children
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="content">{children}</div>
    </div>
  );
}

// Main App component
function App() {
  const handleClick = () => alert("Clicked!");
  
  return (
    <div>
      <Card title="Welcome Card">
        <p>This is a reusable card component</p>
        <Button 
          text="Click Me" 
          color="blue" 
          onClick={handleClick} 
        />
      </Card>
    </div>
  );
}

/*
COMPONENT BEST PRACTICES:
- Keep components small and focused (single responsibility)
- Use descriptive names (PascalCase for components)
- Extract reusable parts into separate components
- Props should be clear and well-named
- Components should be pure (same props = same output)
*/

// map working:: children show krne ke liye

/* unordered list using map ;
const courses = ["HTML","CSS"];

const element = (
<ul>
  {courses.map(course=> <li>{course}</li>)}
</ul>
);
*/


// 20/01/2025

////useEFFECt notes
// https://www.notion.so/Lecture05-useEffect-Hook-2bd3a78e0e228000a7a0f4f80a1cc793#2bd3a78e0e228083a63bd19a699233de
//how does react work under the hood
//https://www.notion.so/Lecture06-React-Virtual-DOM-Reconciliation-Complete-Study-Notes-2c43a78e0e228052ad82e4899bf42cb4

/// React Memo , useMemo and useCallback Hook 
//https://www.notion.so/Lecture07-React-memo-useMemo-useCallback-2ce3a78e0e2280b69d97f561779b69c8



//React hook form ;
