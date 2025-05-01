import Logo from "../UI/Logo";
import SearchBar from "../UI/SearchBar";

export default function Header() {
    return <header className="flex gap-1 justify-between my-1 md:my-3 md:mx-2">
        <Logo/>
        <SearchBar/>
        <div>
            <button className="p-1 bg-slate-100 rounded-md">Cart</button>
        </div>
    </header>;
}
