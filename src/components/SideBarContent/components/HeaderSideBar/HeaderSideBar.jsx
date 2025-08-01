

function HeaderSideBar({icon,title}) {
    return <div>
        <div className="flex flex-col h-full items-center">
            {icon}
            <span className="text-[17px] text-thriColor mt-[10px]">{title}</span>
        </div>
    </div>;
}

export default HeaderSideBar;