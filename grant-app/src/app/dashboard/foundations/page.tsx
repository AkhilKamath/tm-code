// import { deleteUser } from "@/app/lib/actions";
// import { fetchUsers } from "@/app/lib/data";
// import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/components/dashboard/search";
import Image from "next/image";
import Link from "next/link";

const FoundationsPage = async ({ searchParams }: { searchParams: Object }) => {
    // const q = searchParams?.q || "";
    // const page = searchParams?.page || 1;
    //   const { count, foundations } = await fetchfoundations(q, page);
    const count = 1
    const foundations = [{
        _id: 'abcd',
        name: 'Foundation 1',
        email: 'foundation1@gmail.com',
        address: 'address 1',
        createdAt: Date.now(),
        website: '',
        phone: ''
    }]

    return (
        <div className='bg-soft p-5 rounded-lg mt-5'>
            <div className="flex items-center justify-between">
                <Search placeholder="Search for a foundation..." />
                <Link href="/dashboard/foundations/add">
                    <button className="text-sm p-2.5 bg-color-action text-text-soft border-none rounded-md cursor-pointer">Add New</button>
                </Link>
            </div>
            <table className="w-full mt-5">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        {/* <td>Role</td>
                        <td>Status</td> */}
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {foundations.map((foundation) => (
                        <tr key={foundation._id}>
                            <td>
                                <div className="flex items-center gap-2.5">
                                    {/* <Image
                                        src={user.img || "/noavatar.png"}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    /> */}
                                    {foundation.name}
                                </div>
                            </td>
                            <td>{foundation.email}</td>
                            <td>{foundation.createdAt?.toString().slice(4, 16)}</td>
                            {/* <td>{foundation.isAdmin ? "Admin" : "Client"}</td> */}
                            {/* <td>{foundation.isActive ? "active" : "passive"}</td> */}
                            <td>
                                <div className="flex gap-2.5">
                                    <Link href={`/dashboard/foundations/${foundation._id}`}>
                                        <button className="py-1 px-2.5 rounded-md cursor-pointer border-none bg-color-action-2">
                                            View
                                        </button>
                                    </Link>
                                    <form action="{deleteFoundation}">
                                        <input type="hidden" name="id" value={(foundation._id)} />
                                        <button className="py-1 px-2.5 rounded-md cursor-pointer border-none bg-color-action-unsafe text-text-soft">
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <Pagination count={count} /> */}
        </div>
    );
};

export default FoundationsPage;