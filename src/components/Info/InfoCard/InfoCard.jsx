function InfoCard({title,desc,icon}) {
    return <div className=" w-full h-full flex justify-center items-center gap-[10px]">
        <div><img width={40} height={41} src={icon} alt={icon} /></div>
        <div className="flex flex-col gap-[8px]">
            <div className="text-[17px] text-whiteColor">{title}</div>
            <div className="text-[16px] text-fiveColor">{desc}</div>
        </div>
    </div>
}

export default InfoCard;