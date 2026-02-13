import "./ToggleButton.css";

function ToggleButton() {
  const isVisible = true;

  return (
    <div className="toggle-container">
      <button className="toggle-btn">Click me!</button>

      <div className="toggle-content-wrapper">
        <div className={`toggle-content ${isVisible ? 'active' : ''}`}>
          <p className="content-visible">✓ Content is VISIBLE</p>
        </div>

        <div className={`toggle-content ${!isVisible ? 'active' : ''}`}>
          <p className="content-hidden">✗ Content is HIDDEN</p>
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;