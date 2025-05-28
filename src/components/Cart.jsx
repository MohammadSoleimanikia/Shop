import { useSelector, useDispatch } from "react-redux";

import CartItem from "./CartItem";
import Button from "../ui/Button";

import { orderAction } from "@/store/orders";
import { cartAction } from "@/store/cart";
import { dashboardActions } from "@/store/dashboard";

import { useNavigate } from "react-router-dom";

import getCurrentYearMonth from "@/utils/getCurrentDate";

export default function Cart() {
    const { items, totalPrice, totalQuantity } = useSelector(
        (state) => state.cart
    );
    const user = useSelector((state) => state.user.info);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleCheckout() {
        if (confirm("Are you sure you want to place the order?")) {
            dispatch(
                orderAction.addOrder({ items, totalPrice, totalQuantity, user })
            );
            dispatch(
                dashboardActions.addOrder({
                    date: getCurrentYearMonth(new Date().toISOString()),
                    totalPrice,
                    items,
                })
            );

            dispatch(cartAction.clearCart());
            navigate("/");
        }
    }

    if (items.length === 0) {
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
                    {items.map((item) => (
                        <CartItem
                            key={`${item.id}_${item.selectedColor}_${item.selectedSize}`}
                            item={item}
                        />
                    ))}
                </ul>
                <div className="border-2  w-full md:w-1/4 border-slate-200 p-3 rounded-md text-xl flex flex-col gap-5">
                    <p className="flex justify-between">
                        Total price <span>${totalPrice}</span>
                    </p>
                    <p className="flex justify-between">
                        Total quantity <span>{totalQuantity}</span>
                    </p>
                    <Button onClick={handleCheckout}>Checkout</Button>
                </div>
            </div>
        </section>
    );
}
