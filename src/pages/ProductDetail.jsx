import { useState } from "react";
import { useMemo } from "react";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import StarRating from "../ui/StarRating";
import Button from "../ui/Button";
import ReviewSection from "../components/ReviewSection";
import Gallery from "../ui/Gallery";
import { cartAction } from "../store/cart";
import { useDispatch } from "react-redux";



export default function ProductDetail() {
  const { id } = useParams();
  const allItems = useSelector((state) => state.products.items);
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const selectedItem = useMemo(
    () => allItems.find((item) => item.id === Number(id)),
    [allItems, id]
  );

  // Add these states for user selection:
  const [selectedColor, setSelectedColor] = useState(
    selectedItem.colors[0] || ""
  );

  // Filter available sizes (stock > 0)
  const availableSizes = useMemo(() => {
    return Object.entries(selectedItem.stock)
      .filter(([size, qty]) => qty > 0)
      .map(([size]) => size);
  }, [selectedItem]);

  const [selectedSize, setSelectedSize] = useState(availableSizes[0] || "");

  function addToCartHandler() {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }
    dispatch(
      cartAction.addToCart({
        ...selectedItem,
        selectedColor,
        selectedSize,
      })
    );
    toast.success("Item added to the cart");
  }

  return (
    <section>
      <div className="flex flex-col w-full md:flex-row md:gap-10 mt-5">
        <Gallery images={selectedItem.img} />

        <div className="w-full md:w-8/12 mx-5 md:mx-0 ">
          <h2 className="text-3xl font-bold">{selectedItem.title}</h2>
          <span className="flex gap-3 items-center">
            <StarRating rating={selectedItem.rating} />
            {selectedItem.rating}
          </span>
          <p className="text-xl font-semibold">${selectedItem.price}</p>
          <p className="my-5 pb-3 font-light border-b-2 border-slate-200">
            {selectedItem.description}
          </p>

          {/* Color selection */}
          <p className="pb-3">Select color</p>
          <ul className="mb-5 pb-5 flex gap-3 border-b-2 border-slate-200">
            {selectedItem.colors.map((color) => (
              <li
                key={color}
                style={{ backgroundColor: color }}
                className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                  selectedColor === color
                    ? "border-blue-600 scale-110"
                    : "border-black"
                }`}
                title={color}
                onClick={() => setSelectedColor(color)}
              ></li>
            ))}
          </ul>

          {/* Size selection */}
          <p className="pb-3">Select size</p>
          <ul className="mb-5 flex gap-3 border-b-2 border-slate-200">
            {availableSizes.length > 0 ? (
              availableSizes.map((size) => (
                <li
                  key={size}
                  className={`px-4 py-2 border cursor-pointer rounded ${
                    selectedSize === size
                      ? "border-blue-600 bg-blue-100 font-semibold"
                      : "border-gray-400"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </li>
              ))
            ) : (
              <p>No sizes available</p>
            )}
          </ul>

          <div className="flex md:mt-20">
            {isAuthenticated ? (
              <Button onClick={addToCartHandler} type="dark">
                Add to Cart
              </Button>
            ) : (
              <Link to="/login">
                <Button type="dark">Add to Cart</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <ReviewSection reviews={selectedItem.reviews} />
    </section>
  );
}
