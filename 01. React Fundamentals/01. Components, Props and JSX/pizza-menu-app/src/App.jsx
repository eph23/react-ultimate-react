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
            <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, mushrooms, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={10.1}
            />
            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mozarella, mushrooms, and onion"
                photoName="pizzas/funghi.jpg"
                price={10.5}
            />
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

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.photoName} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price + 1}</span>
            </div>
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
