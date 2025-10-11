function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="" />
            <h1>Pizza Spinaci</h1>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h1>Hello React</h1>
            <Pizza />
        </div>
    );
}

export default App;
