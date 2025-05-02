import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NewsLetterSubscription from "../components/NewsletterSubscription";
import Footer from "../components/Footer";
export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
    );
}
