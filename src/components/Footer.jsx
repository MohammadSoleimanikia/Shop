import FacebookIcon from "../UI/Icons/FacebookIcon";
import InstagramIcon from "../UI/Icons/InstagramIcon";
import TwitterIcon from "../UI/Icons/TwitterIcon";
import Logo from "../UI/Logo";
import NewsLetterSubscription from "./NewsletterSubscription";

export default function Footer() {
    return (
        <>
            <footer className="relative flex flex-col items-center">
                <NewsLetterSubscription />
                <div className="bg-slate-200  flex flex-col lg:gap-10 lg:flex-row flex-wrap lg:flex-nowrap w-full mt-5 md:px-16 lg:px-24 py-5">
                    <div className="w-full lg:w-2/6">
                        <Logo/>
                        <p className="font-light my-8">
                            we have cloths that suits your style and which
                            you're proud to wear. From women to men.
                        </p>
                        <div className="flex md:justify-between gap-5 justify-start">
                            <TwitterIcon />
                            <FacebookIcon />
                            <InstagramIcon />
                        </div>
                    </div>
                    
                    <div className="flex md:w-4/6 gap-3 flex-wrap md:flex-nowrap mt-10">
                        <div className="w-3/12">
                            <h1 className="font-bold mb-5">Company</h1>
                            <ul className="font-light flex flex-col gap-5">
                                <li>About</li>
                                <li>Features</li>
                                <li>Works</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div className="w-3/12">
                            <h1 className="font-bold mb-5">Help</h1>
                            <ul className="font-light flex flex-col gap-5">
                                <li>Customer Support</li>
                                <li>Delivery Details</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="w-3/12">
                            <h1 className="font-bold mb-5">FAQ</h1>
                            <ul className="font-light flex flex-col gap-5">
                                <li>Account</li>
                                <li>Manage Deliveries</li>
                                <li>Orders</li>
                                <li>Payments</li>
                            </ul>
                        </div>
                        <div className="w-3/12">
                            <h1 className="font-bold mb-5">Resources</h1>
                            <ul className="font-light flex flex-col gap-5">
                                <li>Free eBooks</li>
                                <li>Development Tutorial</li>
                                <li>How to - Blog</li>
                                <li>YouTube Playlist</li>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                </div>
            </footer>
        </>
    );
}
