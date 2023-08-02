import "./NavButton.css";

function NavButton(props: { name: string }) {
  function handleClick() {
    const fileUrl = "/assets/resume.pdf";
    window.open(fileUrl, "_blank");
  }

  return (
    <button className="nav-button" onClick={handleClick}>
      {props.name}
    </button>
  );
}

export default NavButton;
