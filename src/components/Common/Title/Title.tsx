import "./Title.css";

function Title(props: { children: React.ReactNode }) {
  return <h3 className="title">{props.children}</h3>;
}

export default Title;
