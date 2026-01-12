function Card() {
    return (
        <div className="card">
            <img
                className="avatar"
                src="PP_EPH.jpg
            "
                alt=""
            />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

function Intro() {
    return (
        <div>
            <h1>Ephraim S</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, nihil soluta quaerat suscipit sint impedit error sed
                iure tempora reiciendis.
            </p>
        </div>
    );
}
function SkillList() {
    return (
        <div className="skill-list">
            <Skill skill="React" color="lightblue" />
            <Skill skill="JavaScript" color="yellow" />
            <Skill skill="CSS" color="cyan" />
            <Skill skill="HTML" color="pink" />
        </div>
    );
}
function Skill(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.color }}>
            <span class="">{props.skill}</span>
        </div>
    );
}

function App() {
    return <Card />;
}

export default App;
