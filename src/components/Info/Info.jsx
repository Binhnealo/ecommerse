import { dataInfo } from "@components/Info/constants";
import InfoCard from "@components/Info/InfoCard/InfoCard";
import MainLayout from "@components/Layout/Layout";
import classNames from "classnames";

function Info() {
    return <>
    <MainLayout > 
    <div className={classNames("min-h-[165px] bg-primaryColor mt-[-75px] py-[20px] px-[10px] sm:px-[35px]",
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] place-items-center "
        )}>
            {dataInfo.map((item, index) =>{
                return <InfoCard key={index} title={item.title} desc={item.desc} icon={item.icon}/>
            })}
        </div>
    </MainLayout>
    </>;
}

export default Info;