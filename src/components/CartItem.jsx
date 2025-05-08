import { cartAction } from "@/store/cart";
import { useDispatch } from "react-redux";
export default function CartItem({ item }) {
    const dispatch = useDispatch();
    function increase() {
        dispatch(cartAction.addToCart(item));
    }
    function decrease() {
        dispatch(cartAction.decreaseQuantity(item.id));
    }
    return (
        <article>
            <div className="flex my-8 justify-between gap-3 pb-5 border-b-2 border-slate-200">
                <div className="flex">
                    <img
                        className="h-32 w-32 object-cover bg-slate-200 rounded-md mr-3"
                        src={item.img[0]}
                        alt=""
                    />
                    <div className="flex flex-col">
                        <h2 className="text-nowrap font-semibold">
                            {item.title}
                        </h2>
                        <p>color: {item.colors[0]}</p>
                        <p>size: {item.sizes[0]}</p>
                    </div>
                </div>

                {/* content */}
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between w-full text-xl font-semibold text-red-500  border-2 border-slate-200 rounded-md p-1">
                        <span
                            onClick={decrease}
                            className="hover:bg-slate-200 rounded-l-md cursor-pointer h-full w-1/3 flex justify-center"
                        >
                            -
                        </span>
                        <p className="h-full w-1/3 flex justify-center">{item.quantity}</p>
                        <span
                            onClick={increase}
                            className="hover:bg-slate-200 rounded-r-md cursor-pointer h-full w-1/3 flex justify-center"
                        >
                            +
                        </span>
                    </div>
                    <p className="text-2xl font-semibold">${item.totalPrice}</p>
                </div>
            </div>
        </article>
    );
}
