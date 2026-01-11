import { pizzaData } from "../public/data";

function Header() {
    return (
        <header className="header">
            <h1>React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <Pizza />
        </main>
    );
}
function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    /*  if (hour >= openHour && hour <= closeHour) {
        alert(`We are currently open!`);
    } else {
        alert(`Sorry we are closed`);
    } */

    return (
        <footer className="footer">
            <p>
                {new Date().toLocaleTimeString()} We are currently{" "}
                {isOpen ? "OPEN" : "CLOSED"}
            </p>
        </footer>
    );
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/funghi.jpg" alt="funghi" />
            <h3>Pizza Funghi</h3>
            <p>Tomato, mozarella, mushrooms, and onion</p>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
