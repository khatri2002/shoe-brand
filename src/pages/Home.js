import Catalog from "../components/Catalog";
import Landing from "../components/Landing";
import MarqueeText from "../components/MarqueeText";
import Footer from "../components/Footer";
import Floaters from "../components/Floaters";
import Loader from "../components/Loader";

function Home() {
    return (
        <>
            <Loader />
            <Floaters />
            <Landing />
            <MarqueeText />
            <Catalog />
            <Footer />
        </>
    );
}

export default Home;