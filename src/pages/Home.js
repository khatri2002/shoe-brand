import Catalog from "../components/Catalog";
import Landing from "../components/Landing";
import MarqueeText from "../components/MarqueeText";
import Footer from "../components/Footer";
import Floaters from "../components/Floaters";

function Home() {
    return (
        <>
            <Floaters />
            <Landing />
            <MarqueeText />
            <Catalog />
            <Footer />
        </>
    );
}

export default Home;