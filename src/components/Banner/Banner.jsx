import Buttton from "@components/Button/Button";
import banner from "./banner.module.scss"

function Banner() {
    const {container} = banner;


    return (  <div className={container} >

        <div className="flex flex-col justify-center items-center gap-[20px] text-fourColor">
            <h2 className="font-normal text-[50px]">Marseille04 Demo</h2>
            <p className="text-thriColor my-15px text-red ">Make yours celebrations even more special this years with beautiful.</p>
            <Buttton content={"Go to Shop"}/>
        </div>

    </div>);
}

export default Banner;