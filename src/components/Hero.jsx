import { Link } from "react-router-dom";
import Button from "./ui/Button";
export default function Hero() {
    return (
        <section className="text-black py-24 px-8 bg-slate-200">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to Our Website
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    We offer amazing products and services just for you.
                </p>
                <Link to="/Products">
                    <Button type={"light"}>Explore Now</Button>
                </Link>
            </div>
        </section>
    );
}
