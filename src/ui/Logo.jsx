import { Link } from "react-router-dom";
export default function Logo() {
    return (
        <Link to='/'>
            <h1 className="text-3xl font-bold uppercase text-black">Shop</h1>
        </Link>
    );
}
