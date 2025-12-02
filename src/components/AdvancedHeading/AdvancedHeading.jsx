    import MainLayout from "@components/Layout/Layout";

    function AdvancedHeading() {
    return (
        <MainLayout>
        {" "}
        <section className=" mt-[65px] mb-[15px] h-[100px]">
            <div className=" p-[15px] flex items-center justify-center">
            <div className="border-t-2 border-[#e1e1e1] border-b-2 hidden sm:inline-block  h-[4px] w-full"></div>
            <div className="flex flex-col items-center justify-center py-0 px-[0] md:px-[20px]  w-full gap-[6px] sm:gap-[10px]">
                <p className="text-[14px] text-center text-(--color-thriColor) uppercase">don't miss super offers</p>

                <h2 className="text-[24px] text-center text-(--color-primaryColor) ">Our best products</h2>
            </div>
            <div className="border-t-2 border-[#e1e1e1] border-b-2 h-[4px] hidden sm:inline-block w-full"></div>
            </div>
        </section>
        </MainLayout>
    );
    }

    export default AdvancedHeading;
