import AccordionElement from "./ui/AccordionElement";
import ColorMenu from "./ui/ColorMenu";
import PriceSlider from "./ui/PriceSlider";
export default function SidebarFilters() {
    return (
        <>
        <aside className="hidden md:flex rounded-md border-2 ml-2 border-slate-300 px-4  w-3/12  flex-col">
            <AccordionElement title="Category">
                <AccordionElement title="Men">
                    <ul>
                        <li>T-shirt</li>
                        <li>shirt</li>
                        <li>short</li>
                        <li>hoodies</li>
                        <li>sweat-shirt</li>
                        <li>jeans</li>
                        <li>underwears</li>
                        <li>jacket</li>
                        <li>suits</li>
                        <li>blazzers</li>
                    </ul>
                </AccordionElement>
                <AccordionElement title="women">
                    <ul>
                        <li>t-shirt</li>
                        <li>shirt</li>
                        <li>shorts</li>
                        <li>Leggings</li>
                        <li>hoodies</li>
                        <li>sweatshirts</li>
                        <li>jeans</li>
                        <li>underwears</li>
                        <li>jackets</li>
                        <li>dresses</li>
                        <li>suits</li>
                    </ul>
                </AccordionElement>
            </AccordionElement>
            <AccordionElement title="Price">
                <PriceSlider />
            </AccordionElement>
            <AccordionElement title="Colors">
                <ColorMenu />
            </AccordionElement>
            <button className="w-full mt-2 hover:bg-slate-900 p-1 mx-0.5 rounded-md bg-slate-800 text-white">
                Apply
            </button>
            <button className="w-full mt-2 hover:bg-slate-300 p-1 mx-0.5 rounded-md bg-slate-200 ">
                Reset
            </button>
        </aside>

        {/* // mobile */}
        <aside className="flex md:hidden rounded-md border-2 box-border  border-slate-300 w-full justify-center items-center  flex-col">
            <AccordionElement title="Category">
                <AccordionElement title="Men">
                    <ul>
                        <li>T-shirt</li>
                        <li>shirt</li>
                        <li>short</li>
                        <li>hoodies</li>
                        <li>sweat-shirt</li>
                        <li>jeans</li>
                        <li>underwears</li>
                        <li>jacket</li>
                        <li>suits</li>
                        <li>blazzers</li>
                    </ul>
                </AccordionElement>
                <AccordionElement title="women">
                    <ul>
                        <li>t-shirt</li>
                        <li>shirt</li>
                        <li>shorts</li>
                        <li>Leggings</li>
                        <li>hoodies</li>
                        <li>sweatshirts</li>
                        <li>jeans</li>
                        <li>underwears</li>
                        <li>jackets</li>
                        <li>dresses</li>
                        <li>suits</li>
                    </ul>
                </AccordionElement>
            </AccordionElement>
            <AccordionElement title="Price">
                <PriceSlider />
            </AccordionElement>
            <AccordionElement title="Colors">
                <ColorMenu />
            </AccordionElement>
            <button className="w-10/12 mt-2 hover:bg-slate-900 p-1 mx-0.5 rounded-md bg-slate-800 text-white">
                Apply
            </button>
            <button className="w-10/12 mt-2 hover:bg-slate-300 p-1 mx-0.5 rounded-md bg-slate-200 ">
                Reset
            </button>
        </aside>
        </>
    );
}
