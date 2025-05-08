import { useMemo } from "react";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StarRating from "../components/ui/StarRating";
import Button from "../components/ui/Button";
import ReviewSection from "../components/ReviewSection";
import Gallery from "../components/ui/Gallery";
import { cartAction } from "../store/cart";
import { useDispatch } from "react-redux";

export default function ProductDetail() {
    const { id } = useParams();
    const allItems = useSelector((state) => state.products.items);
    const selectedItem = useMemo(
        () => allItems.find((item) => item.id === Number(id)),
        [allItems, id]
    );

    const dispatch = useDispatch();
    function addToCartHandler() {
        dispatch(cartAction.addToCart(selectedItem));
        toast.success("Item added to the cart");
    }

    return (
        <section>
            <div className="flex flex-col w-full  md:flex-row md:gap-10 mt-5">
                <Gallery images={selectedItem.img} />

                {/* contents */}
                <div className="w-full md:w-8/12 mx-5 md:mx-0 ">
                    <h2 className="text-3xl font-bold">{selectedItem.title}</h2>
                    <span className="flex gap-3 items-center">
                        <StarRating rating={selectedItem.rating} />
                        {selectedItem.rating}
                    </span>
                    <p className="text-xl font-semibold">
                        ${selectedItem.price}
                    </p>
                    <p className="my-5 pb-3 font-light border-b-2 border-slate-200">
                        {selectedItem.description}
                    </p>
                    <p className="pb-3">Select color</p>
                    <ul className="mb-5 pb-5 flex gap-3 border-b-2 border-slate-200">
                        {selectedItem.colors.map((color) => (
                            <li
                                key={color}
                                style={{ backgroundColor: color }}
                                className="w-8 h-8 rounded-full border-2 border-black"
                                title={color}
                            ></li>
                        ))}
                    </ul>
                    <div className="flex md:mt-20">
                        <input
                            type="number"
                            className="bg-gray-200 rounded-full"
                        />
                        <Button onClick={addToCartHandler} type="dark">
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
            <ReviewSection reviews={selectedItem.reviews} />
        </section>
    );
}
