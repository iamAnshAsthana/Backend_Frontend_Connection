import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            &nbsp;&nbsp;
            <Link to={'/categories'}>Categories</Link>
            &nbsp;&nbsp;
            <Link to={'/products'}>Products</Link>
        </div>
    );
}

export default Navbar;