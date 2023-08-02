import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import Title from "../../Common/Title/Title";
import "./AboutMeText.css"

function AboutMeText(props: { firstName: string, lastName: string, summary: string }) {
    return (
        <div className="about-me__text-container">
            <div className="about-me__text">
                <SectionTitle title="ABOUT ME" />
                <Title>
                    <>Damián <span>Briones</span></>
                </Title>
                <p>{props.summary}</p>
            </div>
        </div>
    );
}

export default AboutMeText;