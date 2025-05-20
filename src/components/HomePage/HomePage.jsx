    import AdvancedHeading from "@components/AdvancedHeading/AdvancedHeading";
    import Banner from "@components/Banner/Banner";
    import MainHeader from "@components/Header/Header";
    import HeadingListProducts from "@components/HeadingListProducts/HeadingListProducts";
    import Info from "@components/Info/Info";

    function HomePage() {
    return (
        <>
        <div className="relative">
            <MainHeader />
            <Banner />
            <Info />
            <AdvancedHeading />
            <HeadingListProducts />
        </div>
        </>
    );
    }

    export default HomePage;
