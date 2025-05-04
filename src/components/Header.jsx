import { ShoppingCart, User } from "lucide-react";
import Logo from "../UI/Logo";
import NavItem from "../UI/NavLink";
import SearchBar from "../UI/SearchBar";
import MobileMenu from "../UI/MobileMenu";

export default function Header() {
    return (
        <header
            className="
                    flex justify-between gap-1
                    py-3 shadow-md
                    my-1 
                    md:px-12 lg:px-16"
        >
            <div className="flex">
                <MobileMenu />
                <Logo />
            </div>
            <div className="hidden lg:block">
                <NavItem to="/" end>
                    Home
                </NavItem>
                <NavItem to="/products" end>
                    Products
                </NavItem>
                <NavItem to="/Aboutus" end>
                    About Us
                </NavItem>
                <NavItem to="/Contact" end>
                    Contact
                </NavItem>
            </div>
            <SearchBar />
            <div>
                <button className="p-1 border-[0.15rem] border-black rounded-full">
                    <User />
                </button>
                <button className="p-1 border-[0.15rem] border-black rounded-full ml-3">
                    <ShoppingCart />
                </button>
            </div>
        </header>
    );
}
