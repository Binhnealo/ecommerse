import Button from "@components/Button/Button";
import banner from "./banner.module.scss"
import { useNavigate } from "react-router-dom";

function Banner() {
    const {container} = banner;
    const navigate = useNavigate();
    const handleNavigateToShop = () => {
        navigate("/shop");
    }


    return (  <section className={container} >

        <div className="flex flex-col justify-center items-center gap-[20px] text-fourColor">
            <h2 className="font-normal text-[30px] sm:text-[50px]">Marseille</h2>
            <p className="text-thriColor my-15px text-red text-center">Make yours celebrations even more special this years with beautiful.</p>
            <div><Button content={"Go to Shop"} onClick={handleNavigateToShop}/></div>
        </div>

    </section>);
}

export default Banner;