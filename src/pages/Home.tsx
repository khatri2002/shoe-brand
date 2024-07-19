import Loader from "components/Loader";
import Floaters from "components/Floaters";
import Landing from "components/Landing";
import MarqueeText from "../components/MarqueeText";
import Catalog from "components/Catalog";
import Footer from "components/Footer";

const Home = () => {
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