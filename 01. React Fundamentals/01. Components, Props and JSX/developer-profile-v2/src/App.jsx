import { skills } from "./assets/data";
import profileImg from "../public/PP_EPH.jpg";

function Card() {
    return (
        <div className="card">
            <Image />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

function Image() {
    return <img className="avatar" src={profileImg} alt="" />;
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
    const skillsObj = skills;
    return (
        <div className="skill-list">
            {skillsObj.map((skill) => (
                <Skill
                    skill={skill.skill}
                    color={skill.color}
                    level={skill.level}
                />
            ))}
        </div>
    );
}
function Skill({ skill, color, level }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span class="">{skill}</span>
            <span>
                {level === "beginner" && "👶"}
                {level === "intermediate" && "👍"}
                {level === "advanced" && "💪"}
            </span>
        </div>
    );
}

function App() {
    return <Card />;
}

export default App;
