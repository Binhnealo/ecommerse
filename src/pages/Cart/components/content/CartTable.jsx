    import { useState } from "react";
    import { IoTrashOutline } from "react-icons/io5";
    import SelectBox from "@/pages/OurShop/components/SelectBox/SelectBox";

    const CartTable = () => {
    const [cart, setCart] = useState([
        {
        id: 1,
        name: "Amet faucibus nunc",
        price: 1879.99,
        sku: "87654",
        qty: 1,
        size: "M",
        image:
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min-251x300.jpg",
        },
        {
        id: 2,
        name: "Consectetur nibh at",
        price: 119.99,
        sku: "12349",
        qty: 1,
        size: "M",
        image:
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min-251x300.jpg",
        },
    ]);
    const showOptions = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "7", value: "7" },
    ];

    const handleRemove = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const getValueSelect = (value, type) => {
        console.log(value, type);
    };

    return (
        <div className="w-[800px] border-b  border-sixColor p-3">
        <table className="w-full border-collapse ">
            <thead>
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
            {cart.map((item) => (
                <tr key={item.id} className="">
                <td className="flex items-center h-[124px] gap-5 py-3 ">
                    <img
                    src={item.image}
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
                        className="ml-2 text-gray-500 hover:text-red-500"
                        onClick={() => handleRemove(item.id)}
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
                        getValue={getValueSelect}
                        type="show"
                    />
                    </div>
                </td>
                <td className="h-[124px]">
                    <div className=" flex  justify-end text-[14px] text-secondaryColor h-full py-3">
                    ${(item.price * item.qty).toFixed(2)}
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>


        {/* Coupon + Clear button */}
        </div>
    );
    };

    export default CartTable;

    //
