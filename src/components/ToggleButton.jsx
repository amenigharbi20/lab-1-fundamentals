function ToggleButton() {
     const isVisible = true;
  return (
    <div>
      <button>Click me!</button>
      <div style={{ color: isVisible ? "green" : "gray", marginTop: "10px" }}>
        {isVisible ? "Content is VISIBLE" : "Content is HIDDEN"}
      </div>
    </div>
  );
}
export default ToggleButton;