import Button from "@components/Button/Button";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";

function Banner() {
    const targetTime = "2025-12-31T23:59:59";
    return <>
    <div className=" flex flex-col items-center justify-center gap-[20px] h-[280px] bg-cover bg-[url('https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Background.jpeg')]">
        
            <div className=" flex mb-[20px] text-[14px] "> <CountdownTimer targetTime={targetTime}/></div> 
            <div className="text-[30px] text-center"><h2>The Classics Make A Comback</h2></div>
            <div><Button content={'Buy now'}/> </div>
        
    </div>

        </>;
}

export default Banner;