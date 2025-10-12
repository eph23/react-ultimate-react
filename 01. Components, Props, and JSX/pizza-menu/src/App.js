// ANCHOR Header Component
function Header() {
    return (
        <header className="header">
            <h1>First React Pizza Company</h1>
        </header>
    );
}

// ANCHOR Menu Component
function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <Pizza />
        </main>
    );
}

// ANCHOR Pizza Component
function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="" />
            <h3>Pizza Spinaci</h3>
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
        <footer className="footer">
            {new Date().toLocaleTimeString()} we are currently open
        </footer>
    );
}

// ANCHOR THE APP
function App() {
    return (
        <div className="Container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
