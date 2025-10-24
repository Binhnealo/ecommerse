    import { addProductToCart } from "@/apis/cartService";

    export const handleAddProductToCartCommon = (
    userId,
    setType,
    setIsOpen,
    toast,
    sizeChoose,
    productId,
    quantity,
    setIsLoadingAddToCart,
    handleGetListProductsCart
    ) => {
    if (!userId) {
        setType("login");
        setIsOpen(true);
        toast.warning("Please login to add product to cart");
        return;
    }

    if (!sizeChoose) {
        toast.warning("Please choose size");
        return;
    }
    const data = {
        userId,
        productId,
        size: sizeChoose,
        quantity,
    };
    setIsLoadingAddToCart(true);
    addProductToCart(data)
        .then((res) => {
        setIsLoadingAddToCart(false);
        toast.success("Add to cart successfully");
        setType("cart");
        setIsOpen(true);
        handleGetListProductsCart("cart", userId);
        })
        .catch((err) => {
        setIsLoadingAddToCart(false);
        toast.error("Add to cart failed");
        });
    };
