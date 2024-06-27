import { addFoundation } from "@/lib/actions";

const AddFoundationPage = () => {
    const inputStyles = "p-4 bg-white border-2 border-solid border-color-secondary-hover rounded-lg w-[45%]"
    return (
        <div className="bg-soft p-5 rounded-lg mt-5">
            <form action={addFoundation} className="flex flex-col gap-5">
                <label htmlFor="name">Name</label>
                <input className={inputStyles} type="text" placeholder="name" name="name" required />
                <label htmlFor="email">Email</label>
                <input className={inputStyles} type="email" placeholder="you@email.com" name="email" />
                {/* <input className={inputStyles} type="address" placeholder="size" name="size" /> */}
                <label htmlFor="address">Address</label>
                <textarea
                    className={`${inputStyles} w-full`}
                    required
                    name="address"
                    id="address"
                    rows={8}
                    placeholder="Your address"
                ></textarea>
                <button className="w-full p-4 bg-color-action-2 border-none rounded-lg cursor-pointer" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddFoundationPage;