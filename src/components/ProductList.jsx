import ProductCard from "./ProductCard"
export default function ProductList({items}){
    if (items.length===0){
        return <div className="grid grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4 xl:gap-10 ">
            <h2 >There isn't any Item match with this filters </h2>
        </div>
    }
    return<>
    <ul className="grid grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4 xl:gap-10  ">
        {items.map((item)=> <ProductCard key={item.id} item={item}/>)}
    </ul>
    </> 
}