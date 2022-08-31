const createDigits = () => {
  const digits = [];
  for (let i = 0; i < 10; i++) {
    digits.push(i);
  }
  return digits;
};
function App() {
  const digits = createDigits();
  return (
    <div className="App">
      <div className="fi-calculator">
        <div className="fi-screen">
          <span>(0)</span>0
        </div>
        <div className="fi-operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
        <div className="fi-digits">
          {digits.map((e) => (
            <button key={e.toString()}>{e}</button>
          ))}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
