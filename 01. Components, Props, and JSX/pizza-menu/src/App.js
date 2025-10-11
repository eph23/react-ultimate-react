// ANCHOR Header Component
function Header() {
    return <h1>First React Pizza Company</h1>;
}

// ANCHOR Menu Component
function Menu() {
    return (
        <div>
            <h2>Our Menu</h2>
            <Pizza />
        </div>
    );
}

// ANCHOR Pizza Component
function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="" />
            <h1>Pizza Spinaci</h1>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </div>
    );
}

// ANCHOR Footer Component
function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer>{new Date().toLocaleTimeString()} we are currently open</footer>
    );
}

// ANCHOR THE APP
function App() {
    return (
        <div className="App">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
