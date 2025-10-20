import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    return (
        <div>
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={(event) => setStep(Number(event.target.value))}
                />
                <br />
                Step: {step}
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <input
                    type="text"
                    value={count}
                    onChange={(event) => setCount(Number(event.target.value))}
                />
                <button onClick={() => setCount((c) => c + step)}>+</button>
            </div>
            <p>
                <span>
                    {count === 0
                        ? "Today is "
                        : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </p>
            {count !== 0 || step !== 1 ? (
                <div>
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : null}
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

export default App;
