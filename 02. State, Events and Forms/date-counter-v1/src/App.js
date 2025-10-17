import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <div>
            <div>
                <button onClick={() => setStep((s) => s - 1)}>-</button>
                Step: {step}
                <button onClick={() => setStep((s) => s + 1)}>+</button>
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                Count: {count}
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
