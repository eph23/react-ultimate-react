import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Charger", quantity: 1, packed: false },
];

function Logo() {
    return <h1>🧳 Far Away 🌴</h1>;
}

function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();

        if (!description) return;

        const newItem = {
            id: Date.now(),
            description,
            quantity,
            packed: false,
        };

        console.log(newItem);

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            {" "}
            <h3>What do you need for your trip?</h3>{" "}
            <select
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
            >
                {" "}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {" "}
                        {num}{" "}
                    </option>
                ))}{" "}
            </select>{" "}
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />{" "}
            <button>Add</button>{" "}
        </form>
    );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>
        </div>
    );
}

function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                onChange={() => onToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}
function States() {
    return (
        <footer className="stats">
            You have X items in your list and you already packed X (X%)
        </footer>
    );
}

function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item,
            ),
        );
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
            />
            <States />
        </div>
    );
}

export default App;
