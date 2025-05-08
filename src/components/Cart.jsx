import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Button from "./ui/Button";
export default function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const { totalQuantity, totalPrice } = useSelector((state) => state.cart);
    console.log(cartItems);
    if (cartItems.length === 0) {
        return (
            <>
                <section className="px-5 md:px-12 lg:px-16">
                    <h1 className="my-10 text-2xl font-semibold">Your cart</h1>
                    <h2>The cart is empty !</h2>
                </section>
            </>
        );
    }
    return (
        <section className="px-5 md:px-12 lg:px-16">
            <h1 className="my-10 text-2xl font-semibold">Your cart</h1>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start md:gap-10">
                <ul className="w-full md:w-3/4">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ul>
                <div className="border-2  w-full md:w-1/4 border-slate-200 p-3 rounded-md text-xl flex flex-col gap-5">
                    <p className="flex justify-between">
                        Total price <span>${totalPrice}</span>
                    </p>
                    <p className="flex justify-between">
                        Total quantity <span>{totalQuantity}</span>
                    </p>
                    <Button>Checkout</Button>
                </div>
            </div>
        </section>
    );
}
