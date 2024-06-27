'use client'
import { Ngo } from "@/models/ngos"
import { FormEvent, useState } from "react";

interface Props {
    ngos: [Ngo]
}

const NgoList = ({ ngos }: Props) => {
    const [selectedNgoEmails, setSelectedNgoEmails] = useState<string[]>([]);
    const options = ngos.map(ngo => {
        return { label: ngo.name, value: ngo }
    })
    console.log('sss', selectedNgoEmails)

    function handleSelect(e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.checked) {
            setSelectedNgoEmails([...selectedNgoEmails, e.target.value])
        } else {
            setSelectedNgoEmails(selectedNgoEmails.filter(email => email !== e.target.value))
        }
    }

    function handleSelectAll(e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.checked) {
            setSelectedNgoEmails(ngos.map(ngo => ngo.email))
        } else {
            setSelectedNgoEmails([])
        }
    }
    return (
        <div>
            <input hidden value={selectedNgoEmails} name="emails" onChange={()=>{}}/>
            <table className="w-full mt-5">
                <thead>
                    <tr>
                        <td className="p-2.5"><input type="checkbox" className="mr-5" onChange={handleSelectAll} />Select</td>
                        <td className="p-2.5">Name</td>
                        <td className="p-2.5">Email</td>
                        <td className="p-2.5">Created At</td>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {ngos.map((ngo) => (
                        <tr key={ngo.email}>
                            <td className="p-2.5"><input type="checkbox" onChange={handleSelect} value={ngo.email} checked={selectedNgoEmails.includes(ngo.email)}/></td>
                            <td className="p-2.5">
                                <div className="flex items-center gap-2.5">
                                    {/* <Image
                                        src={user.img || "/noavatar.png"}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    /> */}
                                    {ngo.name}
                                </div>
                            </td>
                            <td className="p-2.5">{ngo.email}</td>
                            <td className="p-2.5">{ngo.createdAt?.toString().slice(4, 16)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default NgoList
