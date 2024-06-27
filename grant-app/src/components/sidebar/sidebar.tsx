
import {
    MdEmail,
    MdFoundation,
    MdAnalytics,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout
} from 'react-icons/md';
import { FaBuildingNgo } from "react-icons/fa6";
import Image from 'next/image';
import MenuItem from './menuitem';

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Emails",
                path: "/dashboard/emails",
                icon: <MdEmail />,
            },
            {
                title: "Foundations",
                path: "/dashboard/foundations",
                icon: <MdFoundation />,
            },
            {
                title: "NGOs",
                path: "/dashboard/ngos",
                icon: <FaBuildingNgo />,
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];

const Sidebar = () => {
    // const { user } = await auth();
    const user = {
        username: 'Akhil',
        role: 'admin'
    }
    return (
        <div className="sticky top-5 text-text-soft">
            <div className="flex items-center gap-5 mb-5">
                {/* <Image
                    className=""
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width="50"
                    height="50"
                /> */}
                <div className="flex flex-col">
                    <span className="font-medium">{user.username}</span>
                    <span className="text-xs">{user.role}</span>
                </div>
            </div>
            <ul className="list-none">
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className="text-sm font-bold my-2.5 mx-0">{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuItem item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <form
                action={async () => {
                    "use server";
                    // await signOut();
                }}
            >
                <button className="p-5 my-1 mx-0 flex items-center gap-2.5 cursor-pointer w-full rounded-lg">
                    <MdLogout />
                    Logout
                </button>
            </form>
        </div>
    )
}

export default Sidebar