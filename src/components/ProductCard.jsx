import StarRating from '../UI/StarRating'
export default function ProductCard({product}){
    return <article className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] mx-auto shadow-md p-4 rounded-lg hover:border-2 border-slate-200 box-border">
        <img src={product.img} className="rounded-sm" alt={product.title} />
        <h2 className="my-3 font-semibold text-lg">{product.title}</h2>
        <StarRating rating={product.rating}/>
        <p className='font-semibold text-lg'>$ {product.price}</p>
    </article>
}