function InfoCard({title,desc,icon}) {
    return <div className="p-[15px] w-[280px] h-[103px] flex justify-between items-center gap-[10px]">
        <div><img width={40} height={41} src={icon} alt={icon} /></div>
        <div className="flex flex-col gap-[8px]">
            <div className="text-[17px] text-whiteColor">{title}</div>
            <div className="text-[16px] text-fiveColor">{desc}</div>
        </div>
    </div>
}

export default InfoCard;