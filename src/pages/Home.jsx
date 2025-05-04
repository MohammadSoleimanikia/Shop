import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="bg-black gap-8  w-full flex flex-wrap justify-between px-20 py-10">
                <img src="/public/images/brands/calvinklein-logo.webp" alt="calvin Klein" />
                <img src="/public/images/brands/gucci-logo.webp" alt="gucci logo" />
                <img src="/public/images/brands/prada-logo.webp" alt="prada logo" />
                <img src="/public/images/brands/zara-logo.webp" alt="zara logo" />
                <img src="/public/images/brands/versace-logo.webp" alt="versace logo" />
            </div>
            <FeaturedProducts title="new arrivals" items={}/>
        </>
    );
}
