// ANCHOR Header Component
function Header() {
    return (
        <header className="header">
            <h1>First React Pizza Co.</h1>
        </header>
    );
}

// ANCHOR Menu Component
function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={10}
            />
            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mushrooms, spinach, and ricotta cheese"
                price={12}
                photoName="pizzas/funghi.jpg"
            />
        </main>
    );
}

// ANCHOR Pizza Component
function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.photoName} alt="" />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price + 2}</span>
            </div>
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
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
