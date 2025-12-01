
function MainLayout({children}) {
    return ( <main className="flex justify-center">
    <div className="w-[470px] sm:w-[1250px] px-[10px] sm:px-[25px]">{children}</div>
    </main> );
}

export default MainLayout;                              