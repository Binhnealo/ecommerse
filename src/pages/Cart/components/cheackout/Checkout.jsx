    import InputCustom from "@components/InputCommon2/Input";
    import axios from "axios";
    import { useContext, useEffect, useRef, useState } from "react";

    import { useForm } from "react-hook-form";
    import RightBody from "@/pages/Cart/components/cheackout/RightBody";
    import { createOrder } from "@/apis/orderService";
    import { useNavigate } from "react-router-dom";
import { SteperContext } from "@/contexts/SteperProvider";

    const CN_BASE = "https://countriesnow.space/api/v0.1";
    function Checkout() {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);

    const navigate = useNavigate();
        const { setCurrentStep } = useContext(SteperContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const formRef = useRef();

    const handleExternalSubmit = () => {
        formRef.current.requestSubmit();
    };

    const onSubmit = async (data) => {
        try {
        const res = await createOrder(data);
        setCurrentStep(3);
        navigate(
            `/cart?id=${res.data.data._id}&totalAmount=${res.data.data.totalAmount}`
        );
        } catch (error) {
        console.error("Error submitting form:", error);
        }
    };

    useEffect(() => {
        axios.get(`${CN_BASE}/countries/iso`).then((res) => {
        setCountries(
            res.data.data.map((c) => ({ value: c.name, label: c.name }))
        );
        });
    }, []);

    useEffect(() => {
        if (!watch("country")) return;

        if (watch("country") === "VietNam" && !localStorage.getItem("listcities")) {
        axios.get(`https://provinces.open-api.vn/api/?depth=2`).then((res) => {
            localStorage.setItem("listcities", JSON.stringify(res.data));
            setCities(
            res.data.data.map((item) => ({
                value: item.codename,
                label: item.name,
            }))
            );
        });
        return;
        }
        if (localStorage.getItem("listcities")) {
        const data = JSON.parse(localStorage.getItem("listcities"));
        setCities(
            data.map((item) => ({ value: item.codename, label: item.name }))
        );
        }
    }, [watch("country")]);

    useEffect(() => {
        if (!watch("cities")) return;

        if (localStorage.getItem("listcities")) {
        const data = JSON.parse(localStorage.getItem("listcities"));
        const statesCustom = data
            .find((item) => item.codename === watch("cities"))
            .districts.map((item) => ({
            value: item.codename,
            label: item.name,
            }));

        setStates(statesCustom);
        }
    }, [watch("cities")]);

    return (
        <div className="flex flex-col md:flex-row gap-[40px]">
        {/* Left container */}
        <div className="flex-1">
            <p className="text-fourColor text-[14px] mb-[30px]">
            Have a coupon?{" "}
            <span className="text-secondaryColor underline cursor-pointer hover:text-fourColor transition duration-300">
                {" "}
                Click here to enter
            </span>
            </p>

            <h6 className="text-[14px] text-primaryColor pb-[14px] mb-[14px] border-b border-sixColor">
            BILLING DETAILS
            </h6>

            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row mb-[20px] gap-[30px]">
                <InputCustom
                label={"First Name"}
                placeholder={"First Name"}
                isRequired
                type={"text"}
                register={register("firstName", {
                    required: true,
                    maxLength: 25,
                })}
                isError={errors.firstName}
                />
                <InputCustom
                label={"Last Name"}
                placeholder={"Last Name"}
                isRequired
                type={"text"}
                register={register("lastName", { required: true, maxLength: 25 })}
                isError={errors.lastName}
                />
            </div>

            <div className="mb-[20px]">
                <InputCustom
                label={"Company Name (Optional)"}
                placeholder={"Company Name"}
                isRequired={false}
                type={"text"}
                register={register("companyName")}
                />
            </div>
            <div className="mb-[20px]">
                <InputCustom
                label={"Country / Region"}
                placeholder={"Your country"}
                isRequired
                type={"text"}
                register={register("country", { required: true })}
                isError={errors.country}
                />
            </div>

            <div className="mb-[20px]">
                <InputCustom
                label={"Street Address"}
                placeholder={"House number and street name"}
                isRequired
                type={"text"}
                register={register("street", { required: true })}
                isError={errors.street}
                />
            </div>

            <div className="mb-[20px]">
                <InputCustom
                placeholder={"apartment, suite, unit etc. (optional)"}
                isShowLabel={false}
                type={"text"}
                register={register("apartment")}
                />
            </div>

            <div className="mb-[20px]">
                <InputCustom
                label={"Town / City"}
                placeholder={"Select your city"}
                isRequired
                dataOptions={cities}
                register={register("cities", { required: true })}
                isError={errors.cities}
                />
            </div>

            <div className="mb-[20px]">
                <InputCustom
                label={"State"}
                placeholder={"Select your state"}
                isRequired
                dataOptions={states}
                register={register("state", { required: true })}
                isError={errors.state}
                />
            </div>

            <div className="mb-[20px]">
                <InputCustom
                label={"Phone"}
                placeholder={"Phone"}
                isRequired
                type={"text"}
                register={register("phone", { required: true })}
                isError={errors.phone}
                />
            </div>

            <div className="mb-[20px]">
                <InputCustom
                label={"ZIP Code"}
                placeholder={"ZIP Code"}
                isRequired
                type={"text"}
                register={register("zipCode", { required: true })}
                isError={errors.zipCode}
                />
            </div>

            <div className="mb-[20px]">
                <InputCustom
                label={"Email Address"}
                placeholder={"Email Address"}
                isRequired
                type={"text"}
                register={register("email", { required: true })}
                isError={errors.email}
                />
            </div>

            <h6 className="text-[14px] text-primaryColor pb-[14px] mb-[14px] border-b border-sixColor">
                Additional Information
            </h6>
            </form>
        </div>
        {/* right container */}
        <RightBody handleExternalSubmit={handleExternalSubmit} />
        </div>
    );
    }

    export default Checkout;
