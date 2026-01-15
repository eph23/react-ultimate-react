import { pizzaData } from "../public/data";

function Header() {
    return (
        <header className="header">
            <h1>React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian Cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzaData.map((pizza) => (
                            <Pizza key={pizza.name} pizzaObj={pizza} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We are still working on our menus, please comeback later</p>
            )}
        </main>
    );
}

function Pizza({ pizzaObj }) {
    if (pizzaObj.soldOut) return null;

    return (
        <li className="pizza">
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order openHour={openHour} closeHour={closeHour} />
            ) : (
                <p>
                    We are happy to welcome you between {openHour}:00 and
                    {closeHour}:00
                </p>
            )}
        </footer>
    );
}

function Order({ openHour, closeHour }) {
    return (
        <div className="order">
            <p>
                We are open from {openHour}:00 until {closeHour}:00. Come visit
                us or order online
            </p>
            <button className="btn">Order</button>
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
