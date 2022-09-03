import { useState } from 'react';

const createDigits = () => {
  const digits = [];
  for (let i = 1; i < 10; i++) {
    digits.push(i);
  }
  return digits;
};

function App() {
  const digits = createDigits();
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      if (calc === '' && value === '-') {
        setCalc(calc + value);
      }
      if (calc === '' && value === '.') {
        setCalc(calc + '0.');
      }
      return;
    }
    if (value === '.' && calc.slice(-1) === '.') {
      return;
    }
    if (value === 'DEL' && calc.length > 0) {
      setCalc(calc.slice(0, -1));
      return;
    } else if (value === 'DEL' && calc.length === 0) {
      return;
    }
    if (value === '=') {
      const newResult = eval(calc).toString();
      setResult(newResult);
      setCalc(newResult);
      return;
    }
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
    setCalc(calc + value);
  };

  const handleClick = (e) => {
    updateCalc(e.target.innerText);
  };

  return (
    <div className="App">
      <div className="fi-calculator">
        <div className="fi-screen">
          <span> {result || ''}</span>
          {calc || '0'}
        </div>
        <div className="fi-operators" onClick={handleClick}>
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
        <div className="fi-digits" onClick={handleClick}>
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
