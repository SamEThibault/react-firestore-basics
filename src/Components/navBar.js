import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

export default function NavBar() {
    return (
        <div>
            <nav className="NavBar">
                <Link to="/home"> Home </Link> |{" "}
                <Link to="/viewdb">viewdb</Link>
            </nav>
        </div>
    )
}