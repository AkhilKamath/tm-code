'use client'
import { Ngo } from "@/models/ngos"
import { useState } from "react";

interface Props {
    ngos: [Ngo]
}

const NgoList = ({ ngos }: Props) => {
    const [selected, setSelected] = useState([]);
    const options = ngos.map(ngo => {
        return { label: ngo.name, value: ngo }
    })
    return (
        <div>
            <table className="w-full mt-5">
                <thead>
                    <tr>
                        <td className="p-2.5"><input type="checkbox" className="mr-5"/>Select</td>
                        <td className="p-2.5">Name</td>
                        <td className="p-2.5">Email</td>
                        <td className="p-2.5">Created At</td>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {ngos.map((ngo) => (
                        <tr key={ngo._id}>
                            <td className="p-2.5"><input type="checkbox"></input></td>
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
