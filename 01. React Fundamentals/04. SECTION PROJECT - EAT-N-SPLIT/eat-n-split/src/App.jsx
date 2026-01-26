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
            <Button>Select</Button>
        </li>
    );
}

function FormAddFriend() {
    return (
        <form className="form-add-friend">
            <label>📝Friend's Name</label>
            <input type="text" />

            <label>🖼️ Image URL</label>
            <input type="text" />

            <Button>Add</Button>
        </form>
    );
}

function FormSplitBill() {
    return (
        <form className="form-split-bill">
            <h2>Split a Bill with X</h2>

            <label>💰Bill Value</label>
            <input type="text" />

            <label>💸Your Expense</label>
            <input type="text" />

            <label>🤑 X's expense</label>
            <input type="text" disabled />

            <label>💳 Who is paying the bill</label>
            <select>
                <option value="">You</option>
                <option value="">X</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    );
}

function Button({ children }) {
    return <button className="button">{children}</button>;
}

function App() {
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList />
                <FormAddFriend />
            </div>
            <FormSplitBill />
        </div>
    );
}

export default App;
