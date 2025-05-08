import ProductCard from "./ProductCard"
import { useSelector } from "react-redux"
export default function ProductList(){
    const items=useSelector(state=>state.products.items)
    return<>
    <ul className="grid grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4 xl:gap-10  ">
        {items.map((item)=> <ProductCard key={item.id} item={item}/>)}
    </ul>
    </> 
}