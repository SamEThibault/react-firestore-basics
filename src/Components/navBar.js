import { Link } from "react-router-dom";
import "../Styles/navBar.css";

// functional component to display navigation bar linked by react router
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