import { Link } from "react-router-dom"
import logo from '../assets/home.png'

function Header() {

    return (
        <div className="header">
            <nav className="navbar navbar-dark bg-dark text-white p-3 fixed-top ">

                <Link to="/">
                    <img width={40} src={logo} alt="icone home" />
                </Link>
                <h3>LAB | React IronBeers</h3>

            </nav >
        </div>
    )
}

export default Header;