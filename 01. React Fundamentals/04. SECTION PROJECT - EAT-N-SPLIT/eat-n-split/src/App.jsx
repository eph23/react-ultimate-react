import "./App.css";
import INITIAL_FRIENDS from "./App";

function FriendsList() {
    const friends = INITIAL_FRIENDS;

    return (
        <div>
            <ul>
                {friends.map((friend) => (
                    <Friend friend={friend} key={friend.id} />
                ))}
            </ul>
        </div>
    );
}

function Friend({ friend }) {
    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} {Math.abs(friend.balance)}€
                </p>
            )}
            {friend.balance === 0 && <p>You and your friend {friend.name}</p>}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owe's you {Math.abs(friend.balance)}€
                </p>
            )}
            <button className="button">Select</button>
        </li>
    );
}

function App() {
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList />
            </div>
        </div>
    );
}

export default App;
