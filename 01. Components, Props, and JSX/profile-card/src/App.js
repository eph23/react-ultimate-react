function Avatar() {
    return (
        <div>
            <img className="avatar" src="assets/P_P.jpg" alt="" />
        </div>
    );
}

function Intro() {
    return (
        <div>
            <h1>Ephraim Sangma</h1>
            <p>
                A passionate web developer who loves turning ideas into
                fast,modern, and user-friendly websites. I focus on clean code,
                simple design, and real-world functionality. Currently
                sharpening my JavaScript and React skills on my journey to
                becoming a full-stack Next.js developer.
            </p>
        </div>
    );
}

function Skill(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.color }}>
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            <Skill skill="React" emoji="🌐" color="lightblue" />
            <Skill skill="JavaScript" emoji="🎯" color="yellow" />
            <Skill skill="CSS" emoji="🎨" color="limegreen" />
            <Skill skill="HTML" emoji="📐" color="gray" />
        </div>
    );
}

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

export default App;
