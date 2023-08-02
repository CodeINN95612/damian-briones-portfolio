import "./NavLinkGroup.css"

function NavlinkGroup(props: { children: React.ReactNode }) {
    return (
        <div className="navbar-links">
            {props.children}
        </div>
    );
}

export default NavlinkGroup;