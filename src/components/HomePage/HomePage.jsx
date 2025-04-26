    import Banner from "@components/Banner/Banner";
    import MainHeader from "@components/Header/Header";
import Info from "@components/Info/Info";

    function HomePage() {
        return (  <>
        <div className="relative">
                <MainHeader/>
                <Banner/>
                <Info/>
        </div>

        </>);
    }

    export default HomePage;