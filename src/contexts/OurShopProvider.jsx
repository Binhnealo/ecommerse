    import { createContext, useEffect, useState } from "react";
    import getProducts from "@/apis/productService";

    export const OurShopContext = createContext();

    export const OurShopProvider = ({ children }) => {
    const sortOptions = [
        { label: "Default sorting", value: 0 },
        { label: "sort by popularity", value: 1 },
        { label: "sort by average rating", value: 2 },
        { label: "sort by latest", value: 3 },
        { label: "sort by price: low to high", value: 4 },
        { label: "sort by price: high to low", value: 5 },
    ];
    const showOptions = [
        { label: "8", value: "8" },
        { label: "12", value: "12" },
        { label: "All", value: "all" },
    ];
    const [sortId, setSortId] = useState(0);
    const [showId, setShowId] = useState(8);
    const [isShowGrid, setIsShowGrid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [products, setProducts] = useState([]);
    const [page,setPage] = useState(1);
    const [total,setTotal] = useState(0);

    const handleLoadMore = () => {
        const query = {
            sortType: sortId,
            page: +page + 1,
            limit: showId,
        }
        setIsLoadMore(true);
        getProducts(query)
        .then((res) => {
            setProducts((prev) =>{
                return [...prev,
                    ...res.contents,
                ]
            });
            setIsLoadMore(false);
            setTotal(res.total);
            setPage(+res.page);
        })
        .catch((err) => {
            console.log(err);
            setIsLoadMore(false);
        });
    }

    const values = {
        sortOptions,
        showOptions,
        setSortId,
        setShowId,
        isShowGrid,
        setIsShowGrid,
        products,
        sortId,
        showId,
        setProducts,
        isLoading,
        total,
        handleLoadMore,
        isLoadMore,
    };

    useEffect(() => {
        const query = {
        sortType: sortId,
        page: 1,
        limit: showId,
        };
        setIsLoading(true);
        getProducts(query)
        .then((res) => {
            setProducts(res.contents);
            setIsLoading(false);
            setTotal(res.total);
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        });
    }, [sortId, showId]);
    return (
        <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>
    );
    };
