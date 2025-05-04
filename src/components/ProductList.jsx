import ProductCard from "./ProductCard"
export default function ProductList(){

    const products=[
        {id:1,price:15,rating:5,title:"nice t shirt for men", colors:['white','black','red'],category:'men',img:'/public/images/men/t-shirt.webp'},
        {id:1,price:15,rating:4,title:"nice t shirt for men", colors:['white','black','red'],category:'men',img:'/public/images/men/t-shirt.webp'},
        {id:1,price:15,rating:1,title:"nice t shirt for men", colors:['white','black','red'],category:'men',img:'/public/images/men/t-shirt.webp'},
        {id:1,price:15,rating:3,title:"nice t shirt for men", colors:['white','black','red'],category:'men',img:'/public/images/men/t-shirt.webp'},
        {id:1,price:15,rating:0,title:"nice t shirt for men", colors:['white','black','red'],category:'men',img:'/public/images/men/t-shirt.webp'},
    ]
    return<>
    <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4 xl:gap-10  ">
        {products.map((product)=> <ProductCard key={product.id} product={product}/>)}
    </ul>
    </> 
}