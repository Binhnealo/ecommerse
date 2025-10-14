    function Information() {
        const dataInformation = [
            { title: "Size", description: "S, M, L" },
            { title: "Material", description: "100% Cotton" },
            { title: "Color", description: "Black, White" },
        ]
    return (
        <div>
            {dataInformation.map((item, index) =>{
                return (
                    <div key={index} className="flex items-center py-[16px] border-b border-sixColor last:border-0">
                    <div className="text-16px text-secondaryColor">{item.title}</div>
                    <div className="w-full text-center text-thriColor text-15px">{item.description}</div>
                    </div>
                    
                )
            })}
        </div>
    );
    }

    export default Information;
