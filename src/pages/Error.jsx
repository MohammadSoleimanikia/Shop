import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Error() {
    return (<>
        <Header/>
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-red-600">
                Oops! Page not found
            </h1>
            <p className="mt-4 text-gray-600">
                The page you're looking for doesn't exist.
            </p>
        </div>
        <Footer/>
        </>
    );
}
