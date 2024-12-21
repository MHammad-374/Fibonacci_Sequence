import { useState } from 'react'
import './App.css'
import Img from './assets/fab_pic.png'

function App() {
  const [count, setCount] = useState(0); // State to hold the number of Fibonacci terms
  const [sequence, setSequence] = useState([]); // State to hold the generated sequence
  const [error, setError] = useState(null)
  const generateFibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
  };

  const handleChange = (e) => {
    // const value = parseInt(e.target.value, 10) ;
    const value = e.target.value;
    if (value >= 0 && value <= 100) {
      setError(null)
      setCount(value); // Update state with input value
    }
    else {
      setError("Please provided number must be in range of 0 - 100.")
    }
  };
  // setSequence(generateFibonacci(value)); // Update sequence based on input

  return (
    <>
      <main>
        <h1>Fibonacci Sequence Generator</h1>
        <div className="grid">
          <div className='flex'>
            <input
              type="number"
              value={count}
              onChange={handleChange} // Bind input value to state
              min="1"
            />
            <button onClick={() => setSequence(generateFibonacci(count))}>Submit</button>
          </div>
          <div className="image">
            <img srcSet={Img} alt="" />
          </div>
          <p className='sequence'>
            <b>Sequence: </b>
            <h5>{error}</h5>
            {sequence.join(" , ")}
          </p>
          <div className="rule">
            <h2>The Rule</h2>
            <p>
              The Rule is x<sub>n</sub> = x<sub>n-1</sub> + x<sub>n-2</sub>
              <br />
              where:
              <br />
              x<sub>n</sub> is term number "n"
              <br />
              x<sub>n-1</sub> is the previous term (n−1)
              <br />
              x<sub>n-2</sub> is the term before that (n−2)
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App
