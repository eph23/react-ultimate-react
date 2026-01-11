import { pizzaData } from "../public/data";

function Header() {
    return (
        <header>
            <h1>React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    return (
        <div>
            <h2>Our Menu</h2>
            <Pizza />
        </div>
    );
}
function Footer() {
    return (
        <footer>
            <p>{new Date().toLocaleTimeString()} We are currently open</p>
        </footer>
    );
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/funghi.jpg" alt="funghi" />
            <h1>Pizza Funghi</h1>
            <p>Tomato, mozarella, mushrooms, and onion</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
