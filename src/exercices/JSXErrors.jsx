import "./JSXErrors.css";

// ERROR 1 FIX: Multiple elements must be wrapped in a single parent element
function FixedComponent1() {
  return (
    <>
      <h1>Hello</h1>
      <p>This is fixed</p>
    </>
  );
}

// ERROR 2 FIX: Cannot use if statements inside JSX
function FixedComponent2() {
  const isTrue = true;
  return (
    <div>
      <p>Result: {isTrue ? 'Yes' : 'No'}</p>
    </div>
  );
}

// ERROR 3 FIX: In React, use 'className' instead of 'class'
function FixedComponent3() {
  return (
    <div className="container">
      <img src="https://via.placeholder.com/200" alt="Cat" />
      <p>A paragraph</p>
    </div>
  );
}

// Main component to display all fixes
function JSXErrors() {
  return (
    <div className="jsx-errors-container">
      <h1>JSX Errors - Fixed! ✅</h1>
      
      <div className="error-section">
        <h3>Fix 1: Single Root Element</h3>
        <FixedComponent1 />
      </div>

      <div className="error-section">
        <h3>Fix 2: Expressions vs Statements</h3>
        <FixedComponent2 />
      </div>

      <div className="error-section">
        <h3>Fix 3: className & Self-closing Tags</h3>
        <FixedComponent3 />
      </div>
    </div>
  );
}

export default JSXErrors;