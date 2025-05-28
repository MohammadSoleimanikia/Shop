import StarRating from "@/ui/StarRating";
import { useSelector } from "react-redux";

export default function TopSelling({ latestMonth }) {
    const soldItems = latestMonth.soldItems;
    const products = useSelector((state) => state.products.items);
    const sortedItems = Object.entries(soldItems).sort((a, b) => b[1] - a[1]);

    return (
        <ul>
            {sortedItems.map(([id, count]) => {
                const item = products.find((product) => product.id == Number(id));
                return (
                    <li className="w-full flex items-center bg-slate-100 p-2 mb-2 rounded-md" key={id}>
                        <img className="w-2/12 mr-5" src={item.img[0]} alt="" />
                        <div className=" flex flex-col gap-2">
                            <p className=" text-base font-semibold">Sold Number: {count}</p>
                            <h2 className=" text-base">{item.title}</h2>
                            <StarRating rating={item.rating}/>
                            <p className="text-base">Price : {item.price}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
