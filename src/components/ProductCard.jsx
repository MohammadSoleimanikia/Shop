import { Link } from 'react-router-dom'
import StarRating from '../UI/StarRating'

export default function ProductCard({ item }) {
    return (
        <article className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto shadow-md p-4 rounded-lg hover:border-2 border-slate-200 box-border h-[400px] flex flex-col justify-between">
            <Link to={`/products/${item.id}`} className="flex flex-col h-full">
                <img src={item.img[0]} className="rounded-sm h-60 object-cover" alt={item.title} />
                <div className="mt-3 flex-1 flex flex-col justify-between">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <StarRating rating={item.rating} />
                    <p className="font-semibold text-lg mt-2">$ {item.price}</p>
                </div>
            </Link>
        </article>
    )
}
