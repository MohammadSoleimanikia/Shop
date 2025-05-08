import ProductList from "../components/ProductList";
import SidebarFilters from "../components/SidebarFilters";
export default function Products() {
    return (
        <div className="flex flex-col justify-center md:flex-row gap-10 mt-10">
            <SidebarFilters />
            <ProductList />
        </div>
    );
}
