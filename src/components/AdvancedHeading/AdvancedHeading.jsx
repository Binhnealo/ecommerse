    import MainLayout from "@components/Layout/Layout";

    function AdvancedHeading() {
    return (
        <MainLayout>
        {" "}
        <section className=" mt-[65px] mb-[15px] h-[100px]">
            <div className=" p-[15px] flex items-center justify-center">
            <div className="border-t-2 border-[#e1e1e1] border-b-2  h-[4px] w-full"></div>
            <div className="flex flex-col items-center justify-center py-0 px-[60px] w-full gap-[10px]">
                <p className="text-[20px]  text-(--color-thriColor) uppercase">don't miss super offers</p>

                <h2 className="text-[32px]  text-(--color-primaryColor) ">Our best products</h2>
            </div>
            <div className="border-t-2 border-[#e1e1e1] border-b-2 h-[4px] w-full"></div>
            </div>
        </section>
        </MainLayout>
    );
    }

    export default AdvancedHeading;
