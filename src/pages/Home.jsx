import { useMemo } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import { useSelector } from "react-redux";
export default function Home() {
    const allItems = useSelector((state) => state.products?.items || []);
    const items = useMemo(()=>allItems.slice(0, 4),[allItems]);

    return (
        <>
            <Hero />
            <div className="bg-black gap-8  w-full flex flex-wrap justify-between px-20 py-10">
                <img
                    src="/images/brands/calvinklein-logo.webp"
                    alt="calvin Klein"
                />
                <img src="/images/brands/gucci-logo.webp" alt="gucci logo" />
                <img src="/images/brands/prada-logo.webp" alt="prada logo" />
                <img src="/images/brands/zara-logo.webp" alt="zara logo" />
                <img
                    src="/images/brands/versace-logo.webp"
                    alt="versace logo"
                />
            </div>
            <FeaturedProducts title="new arrivals" items={items} />
            <FeaturedProducts title="Top Selling" items={items} />
        </>
    );
}
