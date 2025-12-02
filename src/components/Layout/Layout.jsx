
function MainLayout({children}) {
    return ( <main className="flex justify-center">
    <div className="w-full max-w-[1250px] px-[15px] ">{children}</div>
    </main> );
}

export default MainLayout;                              