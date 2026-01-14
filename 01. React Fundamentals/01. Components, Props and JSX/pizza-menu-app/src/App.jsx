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
                <ul className="pizzas">
                    {pizzaData.map((pizza) => (
                        <Pizza key={pizza.name} pizzaObj={pizza} />
                    ))}
                </ul>
            ) : (
                <p>We are still working on our menus, please comeback later</p>
            )}
        </main>
    );
}
function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    if (!isOpen) {
        return (
            <footer>
                <p>
                    We are happy to welcome you between {openHour}:00 and{" "}
                    {closeHour}:00
                </p>
            </footer>
        );
    }

    return (
        <footer className="footer">
            <div className="order">
                <p>
                    We are open until {closeHour}:00. Come visit us or order
                    online
                </p>
                <button className="btn">Order</button>
            </div>
        </footer>
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
