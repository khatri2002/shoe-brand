import Catalog from "../components/Catalog";
import Landing from "../components/Landing";
import MarqueeText from "../components/MarqueeText";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Landing />
            <MarqueeText />
            <Catalog />
            <Footer />
        </>
    );
}

export default Home;