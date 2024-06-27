import EmailTemplate from "@/components/dashboard/emails/emailtemplate"
import NgoList from "@/components/dashboard/emails/ngolist"
import SelectFoundation from "@/components/dashboard/emails/selectfoundation"

const CreateEmailPage = () => {
    const foundations = [
        {
            _id: 1,
            name: 'found1',
            email: 'found1@ngo.com',
            address: 'address1'
        },
        {
            _id: 2,
            name: 'found2',
            email: 'found2@ngo.com',
            address: 'address2'
        },
        {
            _id: 3,
            name: 'found3',
            email: 'found3@ngo.com',
            address: 'address3'
        }
    ]
    const ngos = [
        {
            _id: 1,
            name: 'ngo1',
            email: 'ngo1@ngo.com',
            address: 'address1'
        },
        {
            _id: 2,
            name: 'ngo2',
            email: 'ngo2@ngo.com',
            address: 'address2'
        },
        {
            _id: 3,
            name: 'ngo3',
            email: 'ngo3@ngo.com',
            address: 'address3'
        }
    ]
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row-reverse">
                    <button className="text-sm p-2.5 bg-color-action text-text-soft border-none rounded-md cursor-pointer">Send</button>
            </div>
            <div className="w-full bg-soft p-5 rounded-lg mt-5">
                <SelectFoundation foundations={foundations} />
            </div>
            <div className='bg-soft p-5 rounded-lg mt-5'>
                <NgoList ngos={ngos} />
            </div>
            <div className="grow-[3] bg-soft p-5 rounded-lg mt-5">
                <p>This is how your email will look like</p><br/>
                <div className="bg-white p-2.5">
                    <EmailTemplate name={ngos[0].name} address={ngos[0].address} email={ngos[0].email} fname={foundations[0].name}/>
                </div>
            </div>
        </div>
    )
}

export default CreateEmailPage