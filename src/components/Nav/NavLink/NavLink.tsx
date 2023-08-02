import React from "react";
import "./NavLink.css";

export type NavLinkProps = {
  name: string;
  targetRef: React.RefObject<HTMLElement>;
};

function NavLink({ name, targetRef }: NavLinkProps) {
  function handleClick() {
    targetRef.current!.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <a className="nav-link" onClick={handleClick}>
      {name}
    </a>
  );
}

export default NavLink;
