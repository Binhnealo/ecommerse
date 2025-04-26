import { dataInfo } from "@components/Info/constants";
import InfoCard from "@components/Info/InfoCard/InfoCard";
import MainLayout from "@components/Layout/Layout";

function Info() {
    return <>
    <MainLayout> 
        <div className="h-[165px] bg-primaryColor flex items-center justify-center mt-[-75px] py-[20px] px-[55px]">
            {dataInfo.map((item, index) =>{
                return <InfoCard key={index} title={item.title} desc={item.desc} icon={item.icon}/>
            })}
        </div>
    </MainLayout>
    </>;
}

export default Info;