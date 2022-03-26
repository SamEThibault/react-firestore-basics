import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

export default function NavBar() {
    return (
        <div>
            <nav className="NavBar">
                <Link className="NavElement" to="/home"> Home </Link> |{" "}
                <Link className="NavElement" to="/viewdb">viewdb</Link>
            </nav>
        </div>
    )
}