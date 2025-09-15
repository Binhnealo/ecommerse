
function MainLayout({children}) {
    return ( <main className="flex justify-center">
    <div className=" w-[1250px] bg-(--primary_color)">{children}</div>
    </main> );
}

export default MainLayout;