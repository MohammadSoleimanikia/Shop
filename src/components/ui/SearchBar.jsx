export default function SearchBar({className,...props}) {
    return (
        <search {...props} className={`w-4/12 ${className}`}>
            <form className="rounded-3xl flex justify-between bg-slate-100 p-1 px-3">
                <input className="w-full"  type="text" name="search" placeholder="Search products..." />
                <button type="submit">Search</button>
            </form>
        </search>
    );
}
