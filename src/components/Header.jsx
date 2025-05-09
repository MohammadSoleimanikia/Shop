import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./ui/Logo";
import NavItem from "./ui/NavLink";
import SearchBar from "./ui/SearchBar";
import MobileMenu from "./ui/MobileMenu";
import { useSelector } from "react-redux";

export default function Header() {
    const cartCount = useSelector((state) => state.cart.items.length);
    return (<>
        <header
            className="
                    flex justify-between gap-1
                    py-3 shadow-md
                    my-1 px-5
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
            <SearchBar className='hidden sm:flex'/>
            <div className="flex items-center gap-3 ">
                <button className="p-1 border-[0.15rem] border-black rounded-full hover:bg-slate-200 cursor-pointer">
                    <User />
                </button>

                <div className="relative">
                    <Link to="/cart">
                    <button className="p-1 border-[0.15rem] hover:bg-slate-200 cursor-pointer border-black rounded-full">
                        <ShoppingCart />
                    </button>

                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                            {cartCount}
                        </span>
                    )}
                    </Link>
                </div>
                
            </div>
        </header>

        </>
    );
}
