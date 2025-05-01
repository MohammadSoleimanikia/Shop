export default function SearchBar({...props}) {
    return (
        <search {...props}>
            <form className="rounded-3xl bg-slate-100 p-1 px-3">
                <input  type="text" name="search" placeholder="Search products..." />
                <button type="submit">Search</button>
            </form>
        </search>
    );
}
