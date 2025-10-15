const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA",
    },
    {
        skill: "JavaScript",
        level: "intermediate",
        color: "#EFD81D",
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF",
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33",
    },
    {
        skill: "React",
        level: "beginner",
        color: "#60DAFB",
    },
];

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

function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill
                    skill={skill.skill}
                    level={skill.level}
                    color={skill.color}
                    key={skill.skill}
                />
            ))}
        </div>
    );
}

function Skill({ skill, color, level }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
                {level === "beginner" && "👶"}
                {level === "intermediate" && "👍"}
                {level === "advanced" && "💪"}
            </span>
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
