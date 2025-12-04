    import { IoTrashOutline } from "react-icons/io5";
    import SelectBox from "@/pages/OurShop/components/SelectBox/SelectBox";
    import LoadingCart from "@/pages/Cart/components/LoadingCart";
    const CartTable = ({ listProductsCart, getData, isLoading, getDataDelete }) => {

    const showOptions = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "7", value: "7" },
    ];

    const getValueSelect = (userId, productId, quantity, size) => {
        const data = {
        userId,
        productId,
        quantity,
        size,
        isMultiple: true,
        };
        getData(data);
    };

    return (
        <div className="w-full max-w-[1200px] max-h-[600px] overflow-y-auto overflow-x-auto border-b  border-sixColor p-3 relative">
        <table className="w-full min-w-[700px] border-collapse ">
            <thead className="">
            <tr className="text-left border-b border-sixColor">
                <th className="pb-2 text-[14px] font-normal text-primaryColor  ">
                PRODUCT
                </th>
                <th className="pb-2 text-[14px] font-normal text-primaryColor text-center">
                PRICE
                </th>
                <th className="pb-2 text-[14px] font-normal text-primaryColor text-center">
                SKU
                </th>
                <th className="pb-2 text-[14px] font-normal text-primaryColor text-center">
                QUANTITY
                </th>
                <th className="pb-2 text-[14px] font-normal text-primaryColor text-end">
                SUBTOTAL
                </th>
            </tr>
            </thead>
            <tbody>
            {listProductsCart.map((item, index) => (
                <tr key={index} className="">
                <td className="flex items-center h-[124px] gap-5 py-3 ">
                    <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-[80px] h-[100px] object-cover rounded"
                    />
                    <div className=" h-full">
                    <p className="text-[14px] font-normal text-primaryColor">
                        {item.name}
                    </p>
                    <p className="text-[14px] text-primaryColor">
                        Size: {item.size}
                    </p>
                    </div>
                    <div className="h-full">
                    <button
                        className="ml-2 text-gray-500 hover:text-red-500 cursor-pointer"
                        onClick={() =>
                        getDataDelete({
                            userId: item.userId,
                            productId: item.productId,
                        })
                        }
                    >
                        <IoTrashOutline size={16} />
                    </button>
                    </div>
                </td>
                <td className="h-[124px]">
                    <div className="flex text-[14px] text-secondaryColor justify-center h-full py-3">
                    ${item.price.toFixed(2)}
                    </div>
                </td>
                <td className="h-[124px]">
                    <div className="flex text-[14px] text-secondaryColor justify-center h-full py-3">
                    {item.sku}
                    </div>
                </td>
                <td className="h-[124px]">
                    <div className="flex flex-col items-center justify-start h-full py-3">
                    <SelectBox
                        options={showOptions}
                        getValue={(e) =>
                        getValueSelect(item.userId, item.productId, e, item.size)
                        }
                        type="show"
                        defaultValue={item.quantity}
                    />
                    </div>
                </td>
                <td className="h-[124px]">
                    <div className=" flex  justify-end text-[14px] text-secondaryColor h-full py-3">
                    ${(item.price * item.quantity).toFixed(2)}
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        {isLoading && <LoadingCart />}
        </div>
    );
    };

    export default CartTable;
