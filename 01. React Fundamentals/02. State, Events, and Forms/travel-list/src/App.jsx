function Logo() {
    return <h1>🧳 Far Away 🌴</h1>;
}

function Form() {
    return (
        <div className="add-form">
            <h3>What do you need for your trip?</h3>
        </div>
    );
}

function PackingList() {
    return <div className="list">List</div>;
}
function States() {
    return (
        <footer className="stats">
            You have X items in your list and you already packed X (X%)
        </footer>
    );
}

function App() {
    return (
        <div className="app">
            <Logo />
            <Form />
            <PackingList />
            <States />
        </div>
    );
}

export default App;
