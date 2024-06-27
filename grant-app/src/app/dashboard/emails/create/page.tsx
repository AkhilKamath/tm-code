import EmailTemplate, { EmailTemplateString } from "@/components/dashboard/emails/emailtemplate"
import NgoList from "@/components/dashboard/emails/ngolist"
import SelectFoundation from "@/components/dashboard/emails/selectfoundation"
import { createEmail } from "@/lib/actions"
import { fetchFoundationsNoLimits, fetchNgosNoLimits } from "@/lib/data"

const CreateEmailPage = async () => {
    const { foundations } = await fetchFoundationsNoLimits()
    const ngos = (await fetchNgosNoLimits()).ngos.map(ngo => {
        return {
            name: ngo.name, 
            email: ngo.email, 
            address: ngo.address
        }
    })

    return (
        <form action={createEmail} className="flex flex-col gap-2">
            <div className="flex flex-row-reverse">
                <button className="text-sm p-2.5 bg-color-action text-text-soft border-none rounded-md cursor-pointer">Send</button>
            </div>
            <div className="flex gap-2.5">
                <div className="w-full bg-soft p-5 rounded-lg mt-5 flex flex-col">
                    <label htmlFor="name">Name this email</label>
                    <input className="p-4 bg-white border-2 border-solid border-color-secondary-hover rounded-lg " type="text" name="name"/>
                </div>
                <div className="w-full bg-soft p-5 rounded-lg mt-5">
                    <SelectFoundation foundations={foundations} />
                </div>
            </div>
            <div className='bg-soft p-5 rounded-lg mt-5'>
                <NgoList ngos={ngos} />
            </div>
            <div className="grow-[3] bg-soft p-5 rounded-lg mt-5">
                <p>This is how your email will look like</p><br />
                <div className="bg-white p-2.5">
                    <input hidden name="content" value={EmailTemplateString}/>
                    <EmailTemplate name={ngos[0].name} address={ngos[0].address} email={ngos[0].email} foundation_name={foundations[0].name} />
                </div>
            </div>
        </form>
    )
}

export default CreateEmailPage