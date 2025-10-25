import { useState } from "react";

function BillInput({ bill, onSetBill }) {
    return (
        <div className="add-form">
            <label>How much was the bill?</label>
            <input
                type="text"
                placeholder="Bill value"
                value={bill}
                onChange={(event) => onSetBill(Number(event.target.value))}
            />
        </div>
    );
}

function SelectPercentage({ children, percentage, onSelect }) {
    return (
        <div className="list">
            <label>{children}</label>
            <select
                value={percentage}
                onChange={(event) => onSelect(Number(event.target.value))}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was ok (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing (20%)</option>
            </select>
        </div>
    );
}

function Output({ bill, tip }) {
    return (
        <div className="result">
            <h3>
                You pay ${bill + tip} ({bill}+{tip} tip)
            </h3>
        </div>
    );
}

function Reset({ onReset }) {
    return <button onClick={onReset}>Reset</button>;
}

function App() {
    const [bill, setBill] = useState("");
    const [percentageMe, setPercentageMe] = useState(0);
    const [percentageFriend, setPercentageFriend] = useState(0);

    function handleReset() {
        setBill("");
        setPercentageMe(0);
        setPercentageFriend(0);
    }

    const tip = bill * ((percentageMe + percentageFriend) / 2 / 100);

    return (
        <div className="app">
            <BillInput bill={bill} onSetBill={setBill} />
            <SelectPercentage
                percentage={percentageMe}
                onSelect={setPercentageMe}
            >
                How did you liked the service
            </SelectPercentage>
            <SelectPercentage
                percentage={percentageFriend}
                onSelect={setPercentageFriend}
            >
                How did your friend liked the service
            </SelectPercentage>
            {bill > 0 && (
                <>
                    <Output bill={bill} tip={tip} />
                    <Reset onReset={handleReset} />
                </>
            )}
        </div>
    );
}

export default App;
