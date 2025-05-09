import { useState } from "react";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import SidebarFilters from "@/components/SidebarFilters";
import ProductList from "@/components/ProductList";
export default function Products() {
    const initialState = {
        gender: null,
        category: null,
        price: [0, 1000],
        colors: null,
    };
    const [filters, setFilters] = useState(initialState);

    function filtersHandler(identifier, value) {
        if(filters[identifier]===value){
            setFilters((prevFilters) => ({ ...prevFilters, [identifier]: null }));
            toast.success("The Filter removed ");
            return
        }
        setFilters((prevFilters) => ({ ...prevFilters, [identifier]: value }));
        toast.success("The Filter applied ");
    }
    function resetFilters(){
        setFilters(initialState);
        toast.info("Filters have been reset");
    }

    const allItems = useSelector((state) => state.products.items);

    const items = allItems.filter((item) => {
        // GENDER FILTER
        const matchesGender =
            !filters.gender ||
            item.gender === filters.gender ||
            item.gender === "Unisex";

        // CATEGORY FILTER
        const matchesCategory =
            !filters.category || item.category === filters.category;

        // PRICE FILTER
        const matchesPrice =
            item.price >= filters.price[0] && item.price <= filters.price[1];

        // COLOR FILTER
        const matchesColor =
            !filters.colors || item.colors.includes(filters.colors);

        return matchesGender && matchesCategory && matchesPrice && matchesColor;
    });

    return (
        <div className="flex flex-col justify-center md:flex-row gap-10 mt-10">
            <SidebarFilters
                filtersHandler={filtersHandler}
                setFilters={setFilters}
                resetFilters={resetFilters}
                filters={filters}

            />
            <ProductList items={items} />
        </div>
    );
}
