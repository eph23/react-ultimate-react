import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <>
            <div>
                <h3>Step</h3>
                <button onClick={() => setStep((current) => current - 1)}>
                    -
                </button>
                <span>Step: {step}</span>
                <button onClick={() => setStep((current) => current + 1)}>
                    +
                </button>
            </div>
            <div>
                <h2>Counter</h2>
                <button onClick={() => setCount((current) => current - step)}>
                    -
                </button>
                <span>Count: {count}</span>
                <button onClick={() => setCount((current) => current + step)}>
                    +
                </button>
            </div>
            <div>
                <span>
                    {count === 0
                        ? "Today is "
                        : count > 0
                          ? `${count} days from today is`
                          : `${Math.abs(count)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </div>
        </>
    );
}

function App() {
    return <Counter />;
}

export default App;
