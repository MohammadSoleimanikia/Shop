import ProductList from "../components/ProductList";
import SidebarFilters from "../components/SidebarFilters";

export default function Home() {
    return (
        <main className="flex flex-col md:flex-row">
            <SidebarFilters />
            <ProductList />
        </main>
    );
}
