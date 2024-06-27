import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar/sidebar"


const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="text-text-primary flex text-text-primary">
            <div className="grow bg-primary h-screen p-[20px]">
                <Sidebar/>
            </div>
            <div className="grow-[4] p-5">
                <Navbar/>
                <div className="text-sm">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;