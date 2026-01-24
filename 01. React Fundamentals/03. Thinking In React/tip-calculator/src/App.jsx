import { useState } from "react";

function TipCalculator() {
    const [bill, setBill] = useState(0);
    const [yourPercentage, setYourPercentage] = useState(0);
    const [friendsPercentage, setFriendsPercentage] = useState(0);

    const tip = (bill * (yourPercentage + friendsPercentage)) / 2 / 100;

    function handleReset() {
        setBill(0);
        setYourPercentage(0);
        setFriendsPercentage(0);
    }

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill} />
            <SelectPercentage
                percentage={yourPercentage}
                onSelect={setYourPercentage}
            >
                How much did you liked the food
            </SelectPercentage>
            <SelectPercentage
                percentage={friendsPercentage}
                onSelect={setFriendsPercentage}
            >
                How much did your friend liked the food
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

function BillInput({ bill, onSetBill }) {
    return (
        <div>
            <label>How much was the bill</label>
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
        <div>
            <label>{children}</label>
            <select
                value={percentage}
                onChange={(event) => onSelect(Number(event.target.value))}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

function Output({ bill, tip }) {
    return (
        <h3>
            You pay {bill + tip} (Bill: ${bill} + Tip: ${tip})
        </h3>
    );
}
function Reset({ onReset }) {
    return <button onClick={onReset}>Reset</button>;
}

function App() {
    return (
        <div>
            <TipCalculator />
        </div>
    );
}

export default App;
