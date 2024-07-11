import Catalog from "../components/Catalog";
import Landing from "../components/Landing";
import MarqueeText from "../components/MarqueeText";

function Home() {
    return (
        <>
            <Landing />
            <MarqueeText />
            <Catalog />
        </>
    );
}

export default Home;