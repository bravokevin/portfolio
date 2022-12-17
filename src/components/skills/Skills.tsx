import "./skills.css";
import Languages from './Languages';
import Tools from './Tools';
import Frameworks from './Frameworks';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">
                Skills
            </h2>
            <span className="section__subtitle">
                My technical level
            </span>
            <div className="skills__container container grid">
                <Languages />
                <Tools />
                <Frameworks/>
            </div>
        </section>
    )
}

export default Skills