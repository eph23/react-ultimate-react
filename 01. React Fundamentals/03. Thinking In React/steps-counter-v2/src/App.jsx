import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        if (step === 1) {
            return;
        } else {
            setStep((s) => s - 1);
        }
    }
    function handleNext() {
        if (step >= messages.length) {
            return;
        } else {
            setStep((s) => s + 1);
        }
    }

    function handleClose() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button className="close" onClick={() => handleClose()}>
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>
                    <p className="message">
                        Step {step}: {messages[step - 1]}
                    </p>
                    <data className="buttons">
                        <Button
                            bgColor="#7950f2"
                            textColor="#fff"
                            onClick={handlePrevious}
                        >
                            <span>⏮️</span>Previous
                        </Button>
                        <Button
                            bgColor="#7950f2"
                            textColor="#fff"
                            onClick={handleNext}
                        >
                            Next <span>⏭️</span>
                        </Button>
                    </data>
                </div>
            )}
        </>
    );
}

function Button({ textColor, bgColor, onClick, children }) {
    return (
        <button
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default App;
