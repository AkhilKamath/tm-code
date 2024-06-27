import Pagination from "@/components/dashboard/pagination";
import Search from "@/components/dashboard/search"
import { fetchEmails } from "@/lib/data";
import Link from "next/link"

const EmailPage = async ({searchParams}) => {
    const q = searchParams?.q || ""
    const page = searchParams?.page || 1;
    const { count, emails } = await fetchEmails({q, page})

    return (
        <div className='bg-soft p-5 rounded-lg mt-5'>
            <div className="flex items-center justify-between">
                <Search placeholder="Search for an email..." />
                <Link href="/dashboard/emails/create">
                    <button className="text-sm p-2.5 bg-color-action text-text-soft border-none rounded-md cursor-pointer">Create New</button>
                </Link>
            </div>
            <table className="w-full mt-5">
                <thead>
                    <tr>
                        <td className="p-2.5">Name</td>
                        <td>Foundation email</td>
                        <td>Ngo emails</td>
                        <td>Status</td>
                        {/* <td>Role</td>
                        <td>Status</td> */}
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {emails.map((email) => (
                        <tr key={email._id.toString()}>
                            <td className="p-2.5">
                                <div className="flex items-center gap-2.5">
                                    {/* <Image
                                        src={user.img || "/noavatar.png"}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    /> */}
                                    {email.name}
                                </div>
                            </td>
                            <td>{email.foundation_email}</td>
                            <td>{email.createdAt?.toString().slice(4, 16)}</td>
                            {/* <td>{foundation.isAdmin ? "Admin" : "Client"}</td> */}
                            <td className="flex"><span className={`w-[50%] text-center bg-red-500 px-1.5 py-0.5 text-xs rounded-md ${email.status === 'not_queued' ? 'bg-orange-300' : email.status === 'queued' ? 'bg-red-300' :  'bg-green-300'}`}>{email.status}</span></td>
                            <td>
                                <div className="flex gap-2.5">
                                    <Link href={`/dashboard/emails/${email._id.toString()}`}>
                                        <button className="py-1 px-2.5 rounded-md cursor-pointer border-none bg-color-action-2">
                                            View
                                        </button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default EmailPage