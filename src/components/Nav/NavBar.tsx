import NavBrand from "./NavBrand/NavBrand";
import NavButton from "./NavButton/NavButton";
import NavLink from "./NavLink/NavLink";
import NavlinkGroup from "./NavLinkGroup/NavLinkGroup";
import "./NavBar.css";

export type NavBarProps = {
  links: { ref: React.RefObject<HTMLElement>; name: string }[];
};

function NavBar({ links }: NavBarProps) {
  return (
    <nav>
      <NavBrand name="DAMIÁN" href="/" />
      <NavlinkGroup>
        {links.map((l, i) => (
          <NavLink targetRef={l.ref} name={l.name} key={i} />
        ))}
      </NavlinkGroup>
      <NavButton name="RESUME" />
    </nav>
  );
}

export default NavBar;
