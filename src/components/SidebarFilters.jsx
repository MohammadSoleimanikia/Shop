import AccordionElement from "./ui/AccordionElement";
import ColorMenu from "./ui/ColorMenu";
import PriceSlider from "./ui/PriceSlider";
const categories = [
    "T-Shirts",
    "shirt",
    "shorts",
    "Pants",
    "Hoodies",
    "Sweaters",
    "jeans",
    "underwears",
    "Jackets",
    "Dresses",
    "suits",
];
export default function SidebarFilters({
    filtersHandler,
    resetFilters,
    filters,
}) {
    console.log(filters);
    function selectedFilter(identifier, value) {
        return filters[identifier] === value;
    }

    return (
        <>
            <aside className="flex rounded-md border-2 md:ml-2 border-slate-300 px-4 w-full md:w-3/12  flex-col">
                <AccordionElement title="gender">
                    <ul>
                        <li
                            onClick={() => filtersHandler("gender", "Men")}
                            className={`p-1 rounded-md hover:bg-slate-200 hover:cursor-pointer ${
                                selectedFilter("gender", "Men")
                                    ? "bg-blue-200 font-semibold"
                                    : ""
                            }`}
                        >
                            Men
                        </li>
                        <li
                            onClick={() => filtersHandler("gender", "Women")}
                            className={`p-1 rounded-md hover:bg-slate-200 hover:cursor-pointer ${
                                selectedFilter("gender", "Women")
                                    ? "bg-blue-200 font-semibold"
                                    : ""
                            }`}
                        >
                            Women
                        </li>
                    </ul>
                </AccordionElement>
                <AccordionElement title="Category">
                    <ul>
                        {categories.map((category) => (
                            <li
                                key={category}
                                onClick={() =>
                                    filtersHandler("category", category)
                                }
                                className={`p-1 rounded-md hover:bg-slate-200 hover:cursor-pointer ${
                                    selectedFilter("category", category)
                                        ? "bg-blue-200 font-semibold"
                                        : ""
                                }`}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </AccordionElement>

                <AccordionElement title="Price">
                    <PriceSlider />
                </AccordionElement>
                <AccordionElement title="Colors">
                    <ColorMenu />
                </AccordionElement>
                <button
                    onClick={resetFilters}
                    className="w-full mb-3 mt-2 md:mb-0 hover:cursor-pointer hover:bg-slate-300 p-1 mx-0.5 rounded-md bg-slate-200 "
                >
                    Reset
                </button>
            </aside>
        </>
    );
}
