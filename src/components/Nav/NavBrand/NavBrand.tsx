import "./NavBrand.css"
import NavBar from '../NavBar';

function NavBrand(props: { name: string, href: string }) {
    return (
        <a href={props.href} className="nav-brand">{props.name}</a>
    );
}

export default NavBrand;