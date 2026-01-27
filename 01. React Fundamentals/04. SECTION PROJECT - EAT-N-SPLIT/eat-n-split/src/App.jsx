import { useState } from "react";

import "./App.css";
import INITIAL_FRIENDS from "./App";

function FriendsList({ friends, onSelection, selectedFriend }) {
    return (
        <div>
            <ul>
                {friends.map((friend) => (
                    <Friend
                        friend={friend}
                        key={friend.id}
                        onSelection={onSelection}
                        selectedFriend={selectedFriend}
                    />
                ))}
            </ul>
        </div>
    );
}

function Friend({ friend, onSelection, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} {Math.abs(friend.balance)}€
                </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are even</p>}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owe's you {Math.abs(friend.balance)}€
                </p>
            )}
            <Button onClick={() => onSelection(friend)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
    );
}

function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(event) {
        event.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddFriend(newFriend);
        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>📝Friend's Name</label>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <label>🖼️ Image URL</label>
            <input
                type="text"
                value={image}
                onChange={(event) => setImage(event.target.value)}
            />
            <Button>Add</Button>
        </form>
    );
}

function FormSplitBill({ selectedFriend }) {
    return (
        <form className="form-split-bill">
            <h2>Split a Bill with {selectedFriend.name}</h2>

            <label>💰Bill Value</label>
            <input type="text" />

            <label>💸Your Expense</label>
            <input type="text" />

            <label>🤑 {selectedFriend.name}'s expense</label>
            <input type="text" disabled />

            <label>💳 Who is paying the bill</label>
            <select>
                <option value="">You</option>
                <option value="">{selectedFriend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    );
}

function Button({ children, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}

function App() {
    const [friends, setFriends] = useState(INITIAL_FRIENDS);
    const [showFriend, setShowFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShowAddFriend() {
        setShowFriend((show) => !show);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setShowFriend(false);
    }

    function handleSelection(friend) {
        setSelectedFriend((selected) =>
            selected?.id === friend.id ? null : friend,
        );
        setShowFriend(false);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    onSelection={handleSelection}
                    selectedFriend={selectedFriend}
                />
                {showFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
                <Button onClick={handleShowAddFriend}>
                    {showFriend ? "Close" : "Add Friend"}
                </Button>
            </div>
            {selectedFriend && (
                <FormSplitBill selectedFriend={selectedFriend} />
            )}
        </div>
    );
}

export default App;
