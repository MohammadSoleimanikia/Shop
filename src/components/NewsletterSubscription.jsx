import Button from "./ui/Button";

export default function NewsLetterSubscription() {
    return (
        <section className="md:mx-16 lg:mx-24 flex flex-col md:flex-row bg-black text-white p-10 gap-4 lg:gap-20 text-4xl font-bold md:rounded-md">
            <p>Stay Upto about Our Latest Offers</p>
            <form
                action=""
                className="flex flex-col w-full lg:w-2/6 gap-2 text-lg font-normal text-black"
            >
                <input
                    type="text"
                    placeholder="Enter Your Email address"
                    className="w-full bg-white rounded-4xl p-2"
                />
                <Button type="light">Subscribe to Newsletter</Button>
            </form>
        </section>
    );
}
