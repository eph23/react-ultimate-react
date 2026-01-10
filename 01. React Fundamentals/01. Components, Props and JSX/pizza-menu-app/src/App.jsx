import { pizzaData } from "../public/data";

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
            <Pizza />
            <Pizza />
            <Pizza />
        </div>
    );
}

export default App;
