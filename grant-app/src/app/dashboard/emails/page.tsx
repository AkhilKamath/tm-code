import Search from "@/components/dashboard/search"
import Link from "next/link"

const EmailPage = () => {
    return (
        <div className='bg-soft p-5 rounded-lg mt-5'>
            <div className="flex items-center justify-between">
                <Search placeholder="Search for an email..." />
                <Link href="/dashboard/emails/create">
                    <button className="text-sm p-2.5 bg-color-action text-text-soft border-none rounded-md cursor-pointer">Create New</button>
                </Link>
            </div>
        </div>
    )
}

export default EmailPage