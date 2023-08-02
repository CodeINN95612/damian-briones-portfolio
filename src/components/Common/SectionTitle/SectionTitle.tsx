import "./SectionTitle.css"

function SectionTitle(props: { title: string }) {
    return (<h2 className="section-title">{props.title}</h2>);
}

export default SectionTitle;