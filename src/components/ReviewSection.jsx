import StarRating from "../ui/StarRating";

export default function ReviewSection({ reviews }) {
    return (
        <section className="mx-5 my-10">
            <h2 className="">
                All Reviews <span>({reviews.length})</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {reviews.map((review) => (
                    <div
                        className="w-full border-2 border-slate-200 p-5 rounded-md"
                        key={review.comment}
                    >
                        <StarRating rating={review.rating} />
                        <h2 className="text-lg font-semibold">
                            {review.username}
                        </h2>
                        <p className="font-light">{review.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
