import Button from "../UI/Button";
import ProductCard from "./ProductCard";

export default function FeaturedProducts({title,items}){
    return<section className="my-1 pb-5 flex flex-col items-center gap-5 border-b-2 border-slate-200">
        <h2 className="text-center uppercase text-4xl font-extrabold my-10">{title}</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mx-32">
            {items && items.map((item)=><li key={item.id}><ProductCard  item={item}/></li>)}
        </ul>
        <Button type="dark">View All</Button>
    </section>
}