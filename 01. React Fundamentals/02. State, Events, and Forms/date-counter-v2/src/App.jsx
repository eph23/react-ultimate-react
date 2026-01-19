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
        <>
            <div>
                <h2>Day Count</h2>
                <span>Step: {step}</span>
                <div>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={step}
                        onChange={(event) =>
                            setStep(Number(event.target.value))
                        }
                    />
                </div>
            </div>
            <div>
                <button onClick={() => setCount((current) => current - step)}>
                    -
                </button>
                <input
                    type="text"
                    value={count}
                    onChange={(event) => setCount(Number(event.target.value))}
                />
                <button onClick={() => setCount((current) => current + step)}>
                    +
                </button>
            </div>
            <div>
                <span>
                    {count === 0
                        ? "Today is "
                        : count > 0
                          ? `${count} days from today is `
                          : `${Math.abs(count)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </div>
            <div>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    );
}

function App() {
    return <Counter />;
}

export default App;
