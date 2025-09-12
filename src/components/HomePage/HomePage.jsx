    import AdvancedHeading from "@components/AdvancedHeading/AdvancedHeading";
    import Banner from "@components/Banner/Banner";
    import MainHeader from "@components/Header/Header";
    import HeadingListProducts from "@components/HeadingListProducts/HeadingListProducts";
    import Info from "@components/Info/Info";
import { useEffect, useState } from "react";

import getProducts from '@/apis/productService';
import PopularProducts from "@components/PopularProducts/PopularProducts";
import SaleHomepage from "@components/SaleHomepage/SaleHomepage";
import MainFooter from './../Footer/Footer';



    function HomePage() {
        const [listProducts, setListProducts] = useState([]);
        const query ={
            sortType: 0,
            page:1,
            limit: 10,
        }
        useEffect(()=>{getProducts(query).then((res) =>{

            setListProducts(res.contents);
        } )},[])
        
    return (
        <>
        <div className="relative">
            <MainHeader />
            <Banner />
            <Info />
            <AdvancedHeading />
            <HeadingListProducts data={listProducts.slice(0,2)} />
            <PopularProducts data={listProducts.slice(2,14)}/>
            <SaleHomepage/>
            <MainFooter/>
        </div>
        </>
    );
    }

    export default HomePage;
