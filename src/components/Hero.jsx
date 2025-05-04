import { Link } from "react-router-dom";
import Button from "../UI/Button";
export default function Hero() {
    return (
        <section class="text-black py-24 px-8 bg-slate-200">
            <div class="container mx-auto text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to Our Website
                </h1>
                <p class="text-lg md:text-xl mb-6">
                    We offer amazing products and services just for you.
                </p>
                <Link
                    to="/Products"
                    
                >
                    <Button type={"light"}>Explore Now</Button>
                </Link>
            </div>
        </section>
    );
}
