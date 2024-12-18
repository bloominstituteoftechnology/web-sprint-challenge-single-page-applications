import {
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";



export default function Header() {

    return (
        <div className="container">
            <Nav className="d-flex justify-content-between">
                <h5>Deliveries Available Now</h5>
                <div className="d-flex mb-3">
                    <NavItem>
                        <NavLink className="border border-grey rounded-2 bg-secondary text-black" tag={Link} to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="border border-grey rounded-2 bg-secondary text-black" tag={Link} to="/help">
                            Help
                        </NavLink>
                    </NavItem>
                </div>
            </Nav>
        </div>
    )
}




